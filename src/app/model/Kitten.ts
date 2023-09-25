export class Kitten {
  constructor(
    public name: string,
    public dateOfBirth: Date,
    public image: string,
    public isAdopted: boolean = false
  ) {}
}
