var
  config = require('./config'),
  axios = require('axios'),
  client = axios.create( config.host ),

  request = options => {
    const onSuccess = response => {
      if (response.headers['set-cookie']) {
        response.data['__set_cookie'] = response.headers['set-cookie'];
        if (options.clientRequest && options.clientRequest.user ) {
          options.clientRequest.user.cookies = response.headers['set-cookie'];
        }
      }
      return response.data;
    };
    const onError = error => {
      console.log(error);
      console.error('Request Failed:', error.config);
      if (error.response) {
        console.error('Status:',  error.response.status);
        console.error('Data:',    error.response.data);
        console.error('Headers:', error.response.headers);
      } else {
        console.error('Error Message:', error.message);
      }
      return Promise.reject(error.response || error.message);
    };

    var source = axios.CancelToken.source();

    if (options.clientRequest) {
      if (options.clientRequest.globalData && options.clientRequest.globalData.geo) {
        options.url += (options.url.indexOf('?')>-1?'&':'?') + 'country='+options.clientRequest.globalData.geo;
      }

      options.headers = Object.assign(
        options.headers || {},
        {
          Cookie:
            (options.clientRequest.user && options.clientRequest.user.cookies)
              ? options.clientRequest.user.cookies.join('')
              : ''
        }
      );
    }

    options.cancelToken = source.token;
    options.cancelSource = source;

    return client(options)
      .then(onSuccess)
      .catch(onError);
  };

module.exports = request;
