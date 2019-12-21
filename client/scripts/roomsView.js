var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.render();
  },

  render: function() {
    // iterate through all rooms

    // RoomsView.$select.html(room);


    console.log('rooms ',Rooms);

    var rendered = _.template(
      '<option value ="' +
      '<%- room %>' +
      '">' +
      '<%- room %>' +
      '</option>'
    );
    var html = '';
    // Rooms
    // roomname1: {room: roomname1, stream: []}
    for(var key in Rooms) {
      html += rendered(Rooms[key]);
    }
    console.log('room html ', html);
    $('select').html(html);
    // <option value ="testing1">testing1</option>
    // <option value ="testing2">testing1</option>
    //
  }

};
