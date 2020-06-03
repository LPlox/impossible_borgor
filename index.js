AFRAME.registerComponent("grabable", {
  init: function () {
    var el = this.el;
    el.addEventListener("xbuttondown", function (evt) {
      el.setAttribute("visible", !el.getAttribute("visible"));
    });
  },
});
