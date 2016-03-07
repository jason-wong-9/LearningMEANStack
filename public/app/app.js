angular.module('MyApp', ['authService', 'mainCtrl', 'appRoutes', 'userCtrl', 'userService', 'storyService', 'storyCtrl'])

.config(function($httpProvider){
    $httpProvider.interceptors.push('AuthInterceptor');
})