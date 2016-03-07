angular.module('storyCtrl', ['storyService'])

    .controller('StoryController', function(Story, socketio){
        
        var vm = this;
        
        Story.allStory()
            .success(function(data){
                vm.stories = data;
            });
        
        vm.createStory = function() {
            vm.message = '';
            Story.create(vm.storyData)
                .success(function(data){
                    vm.storyData = '';
                    
                    vm.message = data.message;
                    
                    
                });
        };
        
        socketio.on('story', function(data) {
            vm.stories.push(data);
        })
        
        
})