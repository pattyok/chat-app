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
      lastText: 'Hey, it\'s me',
      face: 'img/Beanie-cat.png',
      chatId: 1
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'img/business-cat-white-collar-tie.jpg',
      chatId: 2
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'img/Craig-Cat-Avatar.jpeg',
      chatId: 3
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'img/Craig-Cat-Avatar.jpeg',
      chatId: 4
    }],
    updateUser: function (user){
      for(var i=0; i<this.all.length; i++){
        if(this.all[i].id === user.id) {
          angular.extend(this.all[i], user);
          return "success";
        } else {
          return "user not found";
        }
      }
    },
    getUser: function(id) {
      console.log(id);
      for(var i=0; i<this.all.length; i++){
        console.log(this.all[i].id);
        if(this.all[i].id === id) {
          return this.all[i];
        }
      }
    }
  };
  return users;
});
