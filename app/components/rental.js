import Component from "@ember/component";

// JS-0815 no autofix
export default Component.extend({
  init() {
    this.set("items", []);
  },
});
