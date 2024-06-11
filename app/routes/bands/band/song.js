import Route from '@ember/routing/route';

export default class BandsBandSongRoute extends Route {
  model() {
    let band = this.modelFor('bands.band');
    return band.songs;
  }
}
