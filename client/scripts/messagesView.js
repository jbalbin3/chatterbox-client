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
      '<%= username %>' +
      '<%= text %>' +
      '</div>'
    );
    var html ='';
    for (let i = 0; i < data.results.length; i++) {
      if(data.results[i].username === undefined) { continue; };
      if(data.results[i].text === undefined) { continue; };
      html += rendered(data.results[i]);
    }
    $('#chats').html(html);
  }

};