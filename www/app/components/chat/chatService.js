angular.module('app.services')

.factory('Chats', function($http) {
  // This is where you would get/send info to the database
  // Data would come back as a JSON array

  // Some fake testing data
  var chats = [{
    id: 1,
    users: [1, 'current'],
    messages: [{
      message: 'Hey, it\'s me, I have something to tell you.',
      user: 1
    }]
  }, {
    id: 2,
    users: [2, 'current'],
    messages: [{
      message: 'I\'m gonna buy a boat today.',
      user: 2
    }]
  }, {
    id: 3,
    users: [3, 'current'],
    messages: [{
      message: 'Heard any good ones lately?',
      user: 3
    }]
  }, {
    id: 4,
    users: [4, 'current'],
    messages: [{
      message: 'Ahoy, there Matey!',
      user: 4
    }]
  }];

  //talk to the cats via various random text generator apis
  var apis = [
    {},
    {
      url: 'http://api.adviceslip.com/advice',
      response: 'response.data.slip.advice',
      method: 'GET',
    },{
      url: 'http://api.funtranslations.com/translate/yoda.json?text=',
      method: 'POST',
      response: 'response.data.contents.translated'
    },{
      url: 'http://api.icndb.com/jokes/random?limitTo=[nerdy]',
      method: 'GET',
      response: 'response.data.value.joke'
    },{
      url: 'http://isithackday.com/arrpi.php?format=json&callback=JSON_CALLBACK&text=',
      method: 'JSONP',
      response: 'response.data.translation.pirate'
    }
  ];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    },
    getReply: function(api, msg, callback) {
      console.log(apis[api].method);
      var url = apis[api].url;
      if (api === 2 || api === 4) {
        url += encodeURI(msg);
      }
      $http({
        method: apis[api].method,
        url: url,
      }).then(function(response, status, headers, config){
        var dataObj = eval(apis[api].response);
        return callback(dataObj);
      }, function(error, status, headers, config) {
        var errMsg = "Meow, can't talk right now";
        return callback(errMsg);
      });

    }
  };
});
