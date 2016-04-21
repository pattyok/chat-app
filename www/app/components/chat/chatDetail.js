angular.module('app.controllers', [])

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, UserService) {

  //set up data
  $scope.chat = Chats.get($stateParams.chatId);
  var users = $scope.chat.users;
  $scope.users = {};
  $scope.title = '';
  for (var i=0; i<users.length; i++){
      var user = UserService.getUser(users[i]);
      $scope.users[users[i]] = user;
      if (user.id !== 'current') {
        $scope.title += user.name;
      }
  }

  var addMessage = function(userId, msg) {
    var newChat = {
      message: msg,
      user: userId
    };
    $scope.chat.messages.unshift(newChat);
  };

  //new messages
  $scope.data = {};//initialize data, ng-model must have a 'dot'
  $scope.sendChat = function () {
    addMessage('current', $scope.data.newMessage);
    
    Chats.getReply($scope.chat.users[0], $scope.data.newMessage, function(msg){
      msg = msg.replace('<p>', '');
      msg = msg.replace('</p>', '');
      addMessage($scope.chat.users[0], msg);
    });
    $scope.data.newMessage = '';

  };

});
