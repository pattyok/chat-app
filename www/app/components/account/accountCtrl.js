angular.module('app.controllers')
.controller('AccountCtrl', function($scope, $state, $cordovaCamera, $cordovaActionSheet, UserService) {
  $scope.user = UserService.getUser('current');
  
  $scope.openPictureOptions = function () {
    var options = {
      title: 'Select Image Source',
      buttonLabels: ['Camera', 'Photo Gallery'],
      addCancelButtonWithLabel: 'Cancel',
      androidEnableCancelButton : true,
      winphoneEnableCancelButton : true,
    };
    document.addEventListener("deviceready", function () {
      $cordovaActionSheet.show(options)
      .then(function(btnIndex) {
        var source, sourceType;
        if (btnIndex === 1) {
          source = 'CAMERA';
        } else {
          source = 'PHOTOLIBRARY';
        }
        $scope.getPicture(source);
      });
    }, false);
  };


  $scope.getPicture = function (source) {
      //need to wrap calls to cordova plugins in deviceready to ensure that they have been loaded
      document.addEventListener("deviceready", function () {
        var options = {
          quality: 50,
          destinationType: Camera.DestinationType.FILE_URI,
          sourceType: Camera.PictureSourceType[source],
          allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 100,
          targetHeight: 100,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false,
          correctOrientation:true
        };

        $cordovaCamera.getPicture(options).then(function(imageURI) {
          alert(imageURI);
          $scope.user.avatar = imageURI;
        }, function(err) {
          // error
        });

      }, false);

  };

  $scope.submitAccount = function() {
    UserService.updateUser($scope.user);
    $state.go('tab.chats');
  };
});
