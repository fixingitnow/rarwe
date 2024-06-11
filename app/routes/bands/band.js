import Route from '@ember/routing/route';

export default class BandsBandRoute extends Route {
  model(params) {
    let bands = this.modelFor('bands');
    let band = bands.find((band) => band.id === params.id);
    return band;
  }
}
