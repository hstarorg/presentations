Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,

  transition: 'slide', // none/fade/slide/convex/concave/zoom

  // Optional reveal.js plugins
  dependencies: [{
      src: '../../reveal.js/lib/js/classList.js',
      condition: function () {
        return !document.body.classList;
      }
    },
    {
      src: '../../reveal.js/plugin/markdown/marked.js',
      condition: function () {
        return !!document.querySelector('[data-markdown]');
      }
    },
    {
      src: '../../reveal.js/plugin/markdown/markdown.js',
      condition: function () {
        return !!document.querySelector('[data-markdown]');
      }
    },
    {
      src: '../../reveal.js/plugin/highlight/highlight.js',
      async: true,
      callback: function () {
        makeSureExecute(function () {
          hljs.initHighlightingOnLoad();
        }, 50);
      }
    },
    {
      src: '../../reveal.js/plugin/zoom-js/zoom.js',
      async: true
    },
    {
      src: '../../reveal.js/plugin/notes/notes.js',
      async: true
    }
  ]
});

function makeSureExecute(fn, maxCount) {
  var executed = false;
  var counter = 0;
  maxCount = maxCount || 5;

  function runInTimer() {
    try {
      fn();
      executed = true;
    } catch (e) {}
    if (!executed) {
      counter++;
      console.log('第', counter, '次重试');
      if (counter > maxCount) {
        return console.warn('已经达到最大重试次数');
      }
      setTimeout(runInTimer, 300);
    }
  }

  runInTimer();
}

document.addEventListener('click', function (evt) {
  var el = evt && evt.target;
  if (el && el.tagName === 'IMG' && (el.getAttribute('allow-enlarge') !== null)) {
    var classList = [].slice.call(el.classList);
    var isEnlargeMode = false;
    if (classList.indexOf('enlarge-mode') >= 0) {
      el.classList.remove('enlarge-mode');
    } else {
      el.classList.add('enlarge-mode');
      el.style.left = '0px';
      isEnlargeMode = true;
    }
    setTimeout(function () {
      var left = (document.querySelector('.slides').clientWidth - el.width) / 2;
      el.style.left = isEnlargeMode ? left + 'px' : 'auto';
    });
  }
}, false);
