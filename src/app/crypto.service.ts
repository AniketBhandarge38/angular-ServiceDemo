import { Injectable } from "@angular/core";

@Injectable()
export class cryptoService {
  coins = [{ id: 1, name: "Aniket" }, { id: 2, name: "Bhushan" }];

  getMyItems() {
    return this.coins;
  }
}
