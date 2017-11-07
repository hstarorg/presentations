var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = window.location.search.match(/print-pdf/gi)
  ? '../../reveal.js/css/print/pdf.css'
  : '../../reveal.js/css/print/paper.css';
document.getElementsByTagName('head')[0].appendChild(link);

// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  history: true,
  progress: true,
  // slideNumber: true,
  transition: 'convex',
  // More info https://github.com/hakimel/reveal.js#dependencies
  dependencies: [
    { src: '../../reveal.js/plugin/markdown/marked.js' },
    { src: '../../reveal.js/plugin/markdown/markdown.js' },
    { src: '../../reveal.js/plugin/notes/notes.js', async: true },
    {
      src: '../../reveal.js/plugin/highlight/highlight.js',
      async: true,
      callback: function() {
        hljs.initHighlightingOnLoad();
      }
    }
  ]
});
