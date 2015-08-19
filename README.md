# PageBreakers

Bookmarklets to QA page design

## Layout-Breaker

`javascript:(function()%20{var%20size_amplification_factor%20=%201.1;var%20possible%20=%20'%20ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';var%20walker%20=%20document.createTreeWalker(document.body,%20NodeFilter.SHOW_TEXT,{%20acceptNode:%20function(n){%20return%20n.parentNode.nodeName%20!==%20'SCRIPT'%20&&%20n.parentNode.nodeName%20!==%20'STYLE'%20&&%20n.nodeValue.trim()%20!=%20'';%20}}%20);while%20(node%20=%20walker.nextNode(),%20node%20!==%20null)%20{var%20new_content%20=%20'';for(var%20i%20=%200;%20i<%20(node.nodeValue.trim().length%20*%20size_amplification_factor);%20i++)%20{new_content%20+=%20possible.charAt(Math.floor(Math.random()%20*%20possible.length));}node.nodeValue%20=%20new_content;}})();`

## Jibberishifier

`javascript:(function()%20{var%20walker%20=%20document.createTreeWalker(document.body,%20NodeFilter.SHOW_TEXT,{%20acceptNode:%20function(n){%20return%20n.parentNode.nodeName%20!==%20'SCRIPT'%20&&%20n.parentNode.nodeName%20!==%20'STYLE'%20&&%20n.nodeValue.trim()%20!=%20'';%20}}%20);while%20(node%20=%20walker.nextNode(),%20node%20!==%20null)%20{node.nodeValue%20=%20Array.prototype.reduce.call(node.nodeValue,%20function(newValue,%20currentChar)%20{var%20charCode%20=%20currentChar.charCodeAt(0);return%20newValue%20+%20(charCode%20%3E=%2048%20&&%20charCode%20%3C=%20%2057%20?%20String.fromCharCode(48%20+%20Math.random()%20*%2010%20|%200)%20:charCode%20%3E=%2065%20&&%20charCode%20%3C=%20%2090%20?%20String.fromCharCode(65%20+%20Math.random()%20*%2026%20|%200)%20:charCode%20%3E=%2097%20&&%20charCode%20%3C=%20122%20?%20String.fromCharCode(97%20+%20Math.random()%20*%2026%20|%200)%20:currentChar);},%20'');}})();`

## Usage

### Both

- Create new bookmark, copy&paste above oneliner as the boormark link
- Navigate to victim page
- Click the boormarklet
- Profit!!!!11!one!

### Layout-Breaker

Click more times to get more and more text

## Goal


### Layout-Breaker

To see how page layout reacts to varying sizes in text content in order to assess robustness of markup & styles.

### Jibberishifier

To see if after removing meaning from the text the visual cues in the page styling are still effective to convey context & direct focus.

## Known Issues

- Firefox has an (open bug)[https://bugzilla.mozilla.org/show_bug.cgi?id=866522] that prevents bookmarklets to run on sites with CSP enabled. Just copy the (raw contents)[https://raw.githubusercontent.com/caligin/layout-breaker/master/layout-breaker.js] of `layout.breaker.js` and paste in the js console.

## Roadmap?

- merge as one bookmarket? First click scrambles, second onwards scramble + increase size. (is it even possible? is it useful? is it good UX?)
- be able to jibberishify non-ascii characters? (Right-to-left languages, ideogram-based languages, other...?)

## Acknowledgements

- Thanks to everyone on (this reddit thread)[https://www.reddit.com/r/javascript/comments/3hbkl9/usability_dont_make_me_think_and_a_bookmarklet/] to inspire me to write this & help refine the ideas.
- Thanks (James)[https://github.com/hellojames] for explaining to me the value of this kind of tests.