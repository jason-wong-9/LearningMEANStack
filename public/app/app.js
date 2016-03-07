angular.module('MyApp', ['authService', 'mainCtrl', 'appRoutes', 'userCtrl', 'userService', 'storyService', 'storyCtrl', 'reverseDirective'])

.config(function($httpProvider){
    $httpProvider.interceptors.push('AuthInterceptor');
})