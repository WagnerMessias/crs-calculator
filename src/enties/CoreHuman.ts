import { Ages, EducationLevels } from "../typings";
const ages: Ages = require("../data/age-table.json");
const educationLevels: EducationLevels = require("../data/level-education-table.json");

export class CoreHuman {
  private agePoint: number = 0;
  private levelEducationPoint: number = 0;
  private informedAge: number = 0;
  private informedLevelEducationIndex: number = 0;
  private hasSpouse: boolean = false;

  //TODO: create test at finish 
  set withSpouse(value: boolean) {
    this.hasSpouse = value;
    this.age = this.informedAge;
    this.levelEducationIndex = this.informedLevelEducationIndex;
  }

  set age(value: number) {
    try {
      this.informedAge = value;
      if (this.scoreIsZero(value)) {
        this.agePoint = 0;
      } else if (this.hasSpouse) {
        this.agePoint = ages.withSpouse[value];
      } else {
        this.agePoint = ages.withoutSpouse[value];
      }
    } catch (e) {
      throw Error("Error set age");
    }
  }

  set levelEducationIndex(index: number) {
    this.informedLevelEducationIndex = index;
    if (this.scoreLevelEducationIsZero(index)) {
      this.levelEducationPoint = 0;
    } else if (this.hasSpouse) {
      this.levelEducationPoint = educationLevels.withSpouse[index].point;
    } else {
      this.levelEducationPoint = educationLevels.withoutSpouse[index].point;
    }
  }

  private scoreIsZero(age: number): boolean {
    return age < 18 || age > 44;
  }

  private scoreLevelEducationIsZero(index: number) {
    return index < 1 || index > 7;
  }

  public getReport() {
    return {
        withSpouse: this.hasSpouse, 
        agePoint: this.agePoint,
        levelEducationPoint: this.levelEducationPoint
    };
  }
}
