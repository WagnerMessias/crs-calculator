import { Ages } from "../typings";
//import ageData  from '../data/age-table.json'
const ages: Ages = require("../data/age-table.json");

export class CoreHuman {
  private agePoint: number = 0;
  private informedAge: number = 0
  private hasWithSpouse: boolean  = false;

  constructor() {}

  set withSpouse(value: boolean) {
    this.hasWithSpouse = value;
    this.age = this.informedAge
  }

  set age(value: number) {
      this.informedAge = value;
    if (this.scoreIsZero(value)) {
      this.agePoint = 0;
    } else if (this.hasWithSpouse) {
      this.agePoint = ages.withSpouse[value];
    } else {
      this.agePoint = ages.withoutSpouse[value];
    }
  }

  private scoreIsZero(age: number): boolean {
    return age < 18 || age > 44;
  }

  public getReport() {
    return { agePoint: this.agePoint, withSpouse: this.withSpouse};
  }
}
