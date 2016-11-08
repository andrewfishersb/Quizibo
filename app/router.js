import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('comicresults', {path: '/comicresults/:name'});
  this.route('art');
  this.route('movie');
  this.route('president');
});

export default Router;
