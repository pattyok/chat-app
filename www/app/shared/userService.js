angular.module('app.services')
.factory('UserService', function() {
  var user = {
    data : {
      firstName: '',
      lastName: '',
      avatar: 'img/unknown.jpg'
    },
    updateUser: function (user){
      angular.extend(this.data, user);
    }
  };
  return user;
});
