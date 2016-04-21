angular.module('app.services', [])

.factory('Chats', function($http) {
  // This is where you would get/send info to the database
  // Data would come back as a JSON array

  // Some fake testing data
  var chats = [{
    id: 1,
    users: [1, 'current'],
    messages: [{
      message: 'Hey, it\'s me',
      user: 1
    }]
  }, {
    id: 2,
    users: [2, 'current'],
    messages: [{
      message: 'Yo, dawg',
      user: 2
    }]
  }, {
    id: 3,
    users: [3, 'current'],
    messages: [{
      message: 'I should buy a boat',
      user: 3
    }]
  }, {
    id: 4,
    users: [4, 'current'],
    messages: [{
      message: 'This is wicked good ice cream.',
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
      url: 'http://quotes.stormconsultancy.co.uk/random.json?callback=JSON_CALLBACK',
      method: 'JSONP',
      response: 'response.quote'
    },{
      url: 'http://api.icndb.com/jokes/random?limitTo=[nerdy]',
      method: 'GET',
      response: 'response.data.value.joke'
    },{
      url: 'http://webknox.com:8080/jokes/oneLiner?apiKey=begbbiidifwiqsjhveargetxubjrgiq',
      method: 'GET',
      response: 'response.data.text'
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
    getReply: function(api, callback) {
      console.log(apis[api].method);
      $http({
        method: apis[api].method,
        url: apis[api].url
      }).then(function(response, status, headers, config){
        console.log("success", response);
        var dataObj = eval(apis[api].response);
        dataObj=angular.callbacks._0;
        callback(null, dataObj);
      }, function(error, status, headers, config) {
        console.log('error: ', angular.callbacks._0, headers, config);
        callback(error, angular.callbacks._0);
      });

    }
  };
});
