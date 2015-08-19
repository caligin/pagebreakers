(function() {
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT,{ acceptNode: function(n){ return n.parentNode.nodeName !== 'SCRIPT' && n.parentNode.nodeName !== 'STYLE' && n.nodeValue.trim() != ''; }} );
  while (node = walker.nextNode(), node !== null) {
    node.nodeValue = Array.prototype.reduce.call(node.nodeValue, function(newValue, currentChar) {
      var charCode = currentChar.charCodeAt(0);
      return newValue + (
        charCode >= 48 && charCode <=  57 ? String.fromCharCode(48 + Math.random() * 10 | 0) :
        charCode >= 65 && charCode <=  90 ? String.fromCharCode(65 + Math.random() * 26 | 0) :
        charCode >= 97 && charCode <= 122 ? String.fromCharCode(97 + Math.random() * 26 | 0) :
        currentChar
      );
    }, '');
  }
})();