(function($) {
    var time = 0;
    $(window).scroll(function() {
     var hT = $('#about').offset().top,
     hH = $('#about').outerHeight(),
     wH = $(window).height(),
     wS = $(this).scrollTop();
     if (wS > (hT+hH-wH)){
         $.each($( ".loading-animate" ), function () {
            $( this ).delay(time += 100).animate({
                height: "20px",
            }, 1000 );
        });
     }
 });
})(jQuery); // End of use strict

/**
*  Module
*
* Description
*/
var portfolio = angular.module('portfolio', ['duScroll']).value('duScrollDuration', 1000).value('duScrollBottomSpy', true);

portfolio.controller('navController', function($scope) {
    $scope.message = 'HOORAY!'; 
});