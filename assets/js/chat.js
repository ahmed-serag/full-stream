function sendRequest($http) {
  return $http.get('../app/mockupData.json')
  .success(function(data) {
      return data;
  })
  .error(function(error) {
      return error;
  });
}
var app = angular.module('chatApp',[]);
app.controller('chatCtrl', function($scope, $http) {
    sendRequest($http).success(function(data) {
      $scope.contacts = data.contacts;
      $scope.currentChat = $scope.contacts[0];
    });
    $scope.openChat = function(id) {
      var index = -1;
      for( var i = 0; i < $scope.contacts.length; i++ ) {
  			if( $scope.contacts[i].id === id ) {
  				index = i;
  				break;
  			}
  		}
      $scope.currentChat = $scope.contacts[index];
    };
    $scope.send = function(message) {
      currentTime = new Date();
      sentMessage = {
        'content': message,
        'type': 1,
        'time': currentTime.getHours() + ':' + currentTime.getMinutes()
      };
      $scope.currentChat.messages.push(sentMessage);
    };
});
