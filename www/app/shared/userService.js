angular.module('app.services')
.factory('UserService', function() {
  var users = {
    all : [{
      id: 'current',
      name: '',
      lastText: '',
      face: 'img/unknown.jpg',
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me, I have something to tell you.',
      face: 'img/Beanie-cat.png',
      chatId: 1
    }, {
      id: 2,
      name: 'Lizzie Yodason',
      lastText: 'I\'m gonna buy a boat',
      face: 'img/business-cat-white-collar-tie.jpg',
      chatId: 2
    }, {
      id: 3,
      name: 'Pinky LaRoy',
      lastText: 'Heard any good ones lately?',
      face: 'img/Craig-Cat-Avatar.jpeg',
      chatId: 3
    }, {
      id: 4,
      name: 'Lady Mary Roberts',
      lastText: 'Ahoy, there Matey!',
      face: 'img/pirate.jpg',
      chatId: 4
    }],
    updateUser: function (user){
      for(var i=0; i<this.all.length; i++){
        if(this.all[i].id === user.id) {
          angular.extend(this.all[i], user);
          return "success";
        }
        return "user not found";
      }
    },
    getUser: function(id) {
      for(var i=0; i<this.all.length; i++){
        if(this.all[i].id === id) {
          return this.all[i];
        }
      }
    }
  };
  return users;
});
