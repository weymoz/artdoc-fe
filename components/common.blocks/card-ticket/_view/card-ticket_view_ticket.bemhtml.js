block('card-ticket').mod('view', 'ticket').content()( () => {
  // const tzMinutes = node._tz % 60;
  // const tzHours = ( node._tz - tzMinutes ) / 60;

  // function fixZero ( number ) {
  //   number = Math.abs( number );
  //   return number < 10 ? '0' + number : number;
  // }


  // const timezone = ( tzHours > 0 ? '+' : '-' ) + fixZero( tzHours ) + ':' + fixZero( tzMinutes );

  console.log();

  return {
      elem: 'section',
      content:
          {
           elem: 'content',
            content: [
              { elem: 'user-date' },
              { elem: 'user-time' }
          ]
        }
    }
});
