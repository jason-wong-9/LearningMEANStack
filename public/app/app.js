angular.module('MyApp', ['authService', 'mainCtrl', 'appRoutes', 'userCtrl', 'userService'])

.config(function($httpProvider){
    $httpProvider.interceptors.push('AuthInterceptor');
})