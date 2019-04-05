block('page-support')(
  replace()(() => {
    return [
      {
        tag: 'script',
        attrs: {
          src:
            'https://js.braintreegateway.com/web/dropin/1.17.0/js/dropin.min.js'
        }
      },
      {
        attrs: { id: 'support-page-react-root' }
      }
    ];
  })
);
