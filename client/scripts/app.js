var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(function() {
          FormView.initialize();
          RoomsView.initialize();
          MessagesView.initialize();
          App.stopSpinner;
    });

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data);
      // print messages on screen
      // var newdata = JSON.stringify(data);
      // data = JSON.parse(newdata);
      // console.log(data);
      // this to build our messages.js, rooms,js,
      // our view/render stuff just looks at the objects above
      App.buildMessages(data);
      App.buildRooms(data);
      MessagesView.render(data);
      callback();
      // check new messages every 5 seconds
      setTimeout(App.fetch, 5000);
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

  buildMessages: function(data) {
    // for (let i = 0; i < data.results.length; i++) {
    //   if(data.results[i].username === undefined) { continue; };
    //   if(data.results[i].text === undefined) { continue; };

    // }
    for (let i = 0; i < data.results.length; i++) {
      if(data.results[i].username === undefined) { continue; };
      if(data.results[i].text === undefined) { continue; };
      Messages.stream.push(data.results[i]);
    }
  },

  buildRooms: function(data) {
    // roomname1: {room: roomname1, stream: []}
    for (let i = 0; i < data.results.length; i++) {
      if(data.results[i].roomname === undefined) { continue; };
      if(Rooms[data.results[i].roomname]) {
        Rooms[data.results[i].roomname].stream.push(data.results[i]);
      } else {
        Rooms[data.results[i].roomname] = {
          room: data.results[i].roomname,
          stream: [data.results[i]]
        }
      }
    }
    console.log('buildrooms ',Rooms);
  }
};
