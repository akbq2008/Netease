import Vue from "vue";
Vue.directive("scrollNo", {
  inserted: () => {
    var locked = false;
    window.addEventListener(
      "touchmove",
      function(ev) {
        locked ||
          ((locked = true),
          window.addEventListener("touchend", stopTouchendPropagation, true));
      },
      true
    );

    function stopTouchendPropagation(ev) {
      ev.stopPropagation();
      window.removeEventListener("touchend", stopTouchendPropagation, true);
      locked = false;
    }
  }
});
export const directive = directive;
