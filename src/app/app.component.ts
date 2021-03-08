import { Component } from "@angular/core";
import { cryptoService } from "./crypto.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  coins = [];
  constructor(private crptService: cryptoService) {
    this.coins = this.crptService.getMyItems();
  }
}
