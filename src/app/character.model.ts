export class Character {
  public name: string;
  public birth: string;
  public height: number;
  public mass: number;
  public hair: string;
  public skin: string;
  public gender: string;
  public vehicle: number;

  constructor(
    name: string,
    birth: string,
    height: number,
    mass: number,
    hair: string,
    skin: string,
    gender: string,
    vehicle: number
  ) {
    this.name = name;
    this.birth = birth;
    this.height = height;
    this.mass = mass;
    this.hair = hair;
    this.skin = skin;
    this.gender = gender;
    this.vehicle = vehicle;
  }
}
