var Friends = {

  toggleStatus: function(userName) {
    if(Friends[userName] === true) {
      Friends[userName] = false;
    } else {
      Friends[userName] = true;
    }
    // console.log('Friends ',Friends[userName]);
  }
};

