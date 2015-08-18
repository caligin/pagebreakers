(function() {
  var size_amplification_factor = 1.1;
  var possible = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT,{ acceptNode: function(n){ return n.parentNode.nodeName !== 'SCRIPT' && n.parentNode.nodeName !== 'STYLE' && n.nodeValue.trim() != ''; }} );
  while (node = walker.nextNode(), node !== null) {
      var new_content = '';
      for(var i = 0; i< (node.nodeValue.trim().length * size_amplification_factor); i++) {
        new_content += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      node.nodeValue = new_content;
  }
})();