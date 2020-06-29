document.addEventListener('DOMContentLoaded', function() {
  var elem = document.querySelector('.sidenav');
  var instance = new M.Sidenav(elem);
  

  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
  
  
  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems);
  
});



