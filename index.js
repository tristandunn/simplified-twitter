(function () {
  function inject(method) {
    const script = document.createElement("script");

    script.text = `(${method.toString()})();`;

    document.documentElement.appendChild(script);
  }

  inject(function() {
    function update() {
      window.innerWidth = Math.min(window.outerWidth, 800);

      document.querySelector("#react-root main").style.flexGrow = 1;
    }

    function dispatchUpdate() {
      setTimeout(function() {
        window.dispatchEvent(new Event("resize"));
      }, 100);
    }

    window.addEventListener("load", dispatchUpdate);
    window.addEventListener("resize", update);

    document.addEventListener("visibilitychange", dispatchUpdate);
  });
})();
