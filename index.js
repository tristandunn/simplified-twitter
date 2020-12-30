(function () {
        script    = document.createElement("script"),
        style     = document.createElement("style"),
        { body }  = document,
        injection = () => {
          addEventListener("resize", () => {
            const oldWidth = innerWidth,
                  newWidth = Math.min(outerWidth, 800);

            window.innerWidth = newWidth;

            if (oldWidth !== newWidth) {
              dispatchEvent(new Event("resize"));
            }
          });

          addEventListener("load", () => {
            dispatchEvent(new Event("resize"));
          });
        };

  script.text     = `(${injection.toString()})();`;
  style.innerText = "main { flex-grow: 1 !important; }";

  body.appendChild(style);
  body.appendChild(script);
})();
