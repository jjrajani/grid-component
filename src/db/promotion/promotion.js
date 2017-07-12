import calcTimeLeft from './promotion.helpers';

export default class Promotion {

  constructor(args) {
    this.name = args[0];
    this.durationDays = args[1];
    this.eventStart = args[2];
    this.department = args[3];
    this.deal = args[4];
  }

}
