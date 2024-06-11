import Route from '@ember/routing/route';

export default class SongsRoute extends Route {
  model() {
    let band = this.modelFor('bands.band');
    console.log(band, 'band name');
    return band.songs;
  }
}
