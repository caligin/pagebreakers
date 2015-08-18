Layout-Breaker
=

Oneliner
==
```
javascript:(function()%20{var%20size_amplification_factor%20=%201.1;var%20possible%20=%20"%20ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";var%20walker%20=%20document.createTreeWalker(document.body,%20NodeFilter.SHOW_TEXT,{%20acceptNode:%20function(n){%20return%20n.parentNode.nodeName%20!==%20SCRIPT%20@@JS_HERE@@@@JS_HERE@@%20n.parentNode.nodeName%20!==%20STYLE%20@@JS_HERE@@@@JS_HERE@@%20n.nodeValue.trim()%20!=%20;%20}}%20);while%20(node%20=%20walker.nextNode(),%20node%20!==%20null)%20{var%20new_content%20=%20;for(var%20i%20=%200;%20i<%20(node.nodeValue.trim().length%20*%20size_amplification_factor);%20i++)%20{new_content%20+=%20possible.charAt(Math.floor(Math.random()%20*%20possible.length));}node.nodeValue%20=%20new_content;}})();
```

Usage
==
- Create new bookmark, copy the above oneliner as the boormark link
- Navigate to the page which layout you want to test
- Click the boormarklet
- Profit!!!!11!one!
