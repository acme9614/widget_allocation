(function () {

  const WIDGETS = [
    "scheme",
    "bank",
    "kyc",
    "rate",
    "history",
    "order",
    "gold",
    "profile"
  ];

  function applyServiceControl() {
    const config = window.WIDGETS_CONFIG;

    if (!config || !config.features) return;

    WIDGETS.forEach(service => {
      if (config.features[service] === false) {

        document.querySelectorAll(`[data-service="${service}"]`)
          .forEach(el => el.remove());

      }
    });
  }

  window.addEventListener("DOMContentLoaded", applyServiceControl);

})();