import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Grace Hopper', 'Richard Stallman', 'Linus Torvalds'];
  }
});
