var FormView = {

  selectedRoom: '',

  $form: $('form'),

  $drop: $('select'),

  $newRoom: $('#newRoom'),

  initialize: function() {
    // var $toggleFriend = $('.toggleFriend');
    FormView.$form.on('submit', FormView.handleSubmit);
    FormView.$drop.on('change', FormView.handleDrop);
    FormView.$newRoom.on('submit', FormView.handleNewRoomSubmit);
    // FormView.$toggleFriend.on('hover',
    // console.log('jquerynewRoom ',FormView.$newRoom);
    // console.log('jquery toggle obj ', $('.toggleFriend'));
    // $('.toggleFriend').click(funtion(){
    //   console.log('test')
    // });
    //   $('.toggleFriend').on('click', function(event){
    //     console.log('target' ,event.target);
    //   });
//    FormView.$toggleFriend.on('click', function(event) {
//      console.log('test ', $('event.target').val());
      // Friends.toggleStatus($(this).val()));
//    });


  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    MessageView.text = $('#message').val();
    var equalIndex = window.location.search.indexOf('=');
    MessageView.username = window.location.search.slice(equalIndex + 1);

    Parse.create(MessageView,function () {
      App.startSpinner();
      App.fetch(App.stopSpinner);
      console.log('chatterbox: Message sent');
    });

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

  handleDrop: function(event) {
    event.preventDefault();
    FormView.selectedRoom = $(this).val();
    RoomsView.render();
  },

  handleNewRoomSubmit: function(event) {
    event.preventDefault();
    MessageView.roomname = $('#newRoomVal').val();
    console.log('new room ',MessageView.roomname);
  }
};