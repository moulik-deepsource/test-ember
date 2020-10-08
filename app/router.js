import EmberRouter from "@ember/routing/router";
import config from "ember-quickstart/config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("about");
  // JS-0778: 
  this.route("Home");
  this.route("SignUp");
  // JS-0809: fixables
  this.route('blog-posts', { path: '/blog-posts' });
});
