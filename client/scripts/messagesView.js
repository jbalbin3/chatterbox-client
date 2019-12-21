var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(data) {
    // data is an array containing objects.
    // Array[0] example:
    // createdAt: "2019-12-20T23:55:32.773Z"
    // objectId: "OnNTuAMSJ3"
    // roomname: "lobby"
    // text: "i mean , i`m eighteen years old"
    // updatedAt: "2019-12-20T23:55:32.773Z"
    // username: "I`M eighteen YEARS OLD"
    var rendered = _.template(
      '<div>' +
      // '<%= createdAt %>' +
      // '<%= updatedAt %>' +
      '<%- username %>' +
      '<%- text %>' +
      '</div>'
    );
    var html ='';
    //       html += rendered(data.results[i]);

    // iterate through Messages object here not data
    for(let i = 0; i < Messages.stream.length; i++) {
      html += rendered(Messages.stream[i]);
    }

    $('#chats').html(html);
  }

};