var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
  },

  render: function () {
    // data is an array containing objects.
    // Array[0] example:
    // createdAt: "2019-12-20T23:55:32.773Z"
    // objectId: "OnNTuAMSJ3"
    // roomname: "lobby"
    // text: "i mean , i`m eighteen years old"
    // updatedAt: "2019-12-20T23:55:32.773Z"
    // username: "I`M eighteen YEARS OLD"
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
    for (let i = 0; i < Messages.stream.length; i++) {
      var uName = Messages.stream[i].username;
      if (Friends[uName]) {
        html += renderedBoldUser(Messages.stream[i]);
      } else {
        html += rendered(Messages.stream[i]);
      }
      $('#chats').html(html);
    }
  }
};