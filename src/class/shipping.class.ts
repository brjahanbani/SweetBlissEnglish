export class Shipping {
  public id!: number;
  public address!: string;

  constructor(data: Partial<Shipping>) {
    this.id = data.id!;
    this.address = data.address!;
  }
}
