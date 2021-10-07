(function () {
  var rand = Math.floor(Math.random() * 9999999999);

  var scripts = document.getElementsByTagName('script');
  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    var src = script.getAttribute('src');
    if (src) {
      var matches = src.match(/test-task=tpdv/);
    }
    if (src && !script.getAttribute('script-initialized') && matches) {
      script.setAttribute('script-initialized', true);

      var urlParams = getParams();
      widgetWrapper = document.createElement('div');
      widgetWrapper.id = 'tp_widget_wrapper' + rand;
      script.parentElement.insertBefore(widgetWrapper, script);

      var div = document.createElement('div');
      var containerId = '_widget-app-container' + rand;
      div.id = containerId;
      div.dataset.lang = 'en';
      if (urlParams.bgColor) div.dataset.bgColor = urlParams.bgColor;
      if (urlParams.textColor) div.dataset.textColor = urlParams.textColor;
      if (urlParams.btnColor) div.dataset.btnColor = urlParams.btnColor;
      widgetWrapper.appendChild(div);

      var js = document.createElement('script');
      js.type = 'text/javascript';
      // Использован локальный путь к виджету.
      js.src = '../dist/tp_widget.js'; // Ex. https://cdn.jsdelivr.net/gh/dimavasilyev/tp-widget@main/dist/tp_widget.js';
      js.async = 1;
      js.dataset.containerId = containerId;
      widgetWrapper.appendChild(js);

      function getParams() {
        var params = {};
        script.src.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
          params[key] = value;
        });
        return params;
      }

      break;
    }
  }
})();
