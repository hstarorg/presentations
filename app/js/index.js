// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  history: true,
  // More info https://github.com/hakimel/reveal.js#dependencies
  dependencies: [
    { src: 'assets/reveal.js/plugin/markdown/marked.js' },
    { src: 'assets/reveal.js/plugin/markdown/markdown.js' },
    { src: 'assets/reveal.js/plugin/notes/notes.js', async: true },
    {
      src: 'assets/reveal.js/plugin/highlight/highlight.js', async: true, callback: function () {
        hljs.initHighlightingOnLoad();
      }
    }
  ]
});