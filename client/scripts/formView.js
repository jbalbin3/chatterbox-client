var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    Messages.text = $('#message').val();
    var equalIndex = window.location.search.indexOf('=');
    Messages.username = window.location.search.slice(equalIndex + 1);

    Parse.create(Messages,function () {
      App.startSpinner();
      App.fetch(App.stopSpinner);
      console.log('chatterbox: Message sent');
    });

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};