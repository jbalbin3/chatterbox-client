var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    RoomsView.renderDrop();
    RoomsView.render();
  },

  render: function () {
    // iterate through all rooms
    var rendered = _.template(
      '<div onclick="Friends.toggleStatus(' + "'" +
      '<%- username %>' + "'" +
      ')">' +
      '<%- username %>' +
      '</div>' +
      '<div>' +
      '<%- text %>' +
      '</div>'
    );

    var renderedBoldUser = _.template(
      '<div onclick="Friends.toggleStatus(' + "'" +
      '<%- username %>' + "'" +
      ')">' +
        '<%- username %>' +
      '</div>' +
      '<div style="font-weight: bold">' +
      '<%- text %>' +
      '</div>'
    );

    var html = '';
    //       html += rendered(data.results[i]);

    // iterate through Messages object here not data
    ////Rooms{roomname1: {room: roomname1, stream: []}}

    for (let i = 0; i < Rooms[FormView.selectedRoom].stream.length; i++) {
    var uName = Rooms[FormView.selectedRoom].stream[i].username;
      if (Friends[uName]) {
        html += renderedBoldUser(Rooms[FormView.selectedRoom].stream[i]);
      } else {
        html += rendered(Rooms[FormView.selectedRoom].stream[i]);
      }
    }
    $('#chats').html(html);
  },

  renderDrop: function () {
    // RoomsView.$select.html(room);
    var rendered = _.template(
      '<option value ="' +
      '<%- room %>' +
      '">' +
      '<%- room %>' +
      '</option>'
    );
    var html = '<option value ="" selected></option>';
    // Rooms
    // roomname1: {room: roomname1, stream: []}
    for (var key in Rooms) {
      if (Rooms[key].room !== "") {
        html += rendered(Rooms[key]);
      }
    }
    // console.log('room html ', html);
    $('select').html(html);
    // <option value ="testing1">testing1</option>
    // <option value ="testing2">testing1</option>
    //
  }
};
