(function($) {
  'use strict';
  document.addEventListener('DOMContentLoaded', function() {
    var element = document.getElementById('header');
    function listener() {
      if (window.pageYOffset > 0) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    }
    listener();
    window.addEventListener('scroll', function(e) {
      listener();
    });
  });
})();
