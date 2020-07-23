import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-producer",
  templateUrl: "./producer.component.html",
  styleUrls: ["./producer.component.css"],
})
export class ProducerComponent implements OnInit {
  downgrooves;
  ericRylos;
  evotone;
  mej;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    // this.httpClient.get("assets/downgrooves.json").subscribe((data) => {
    //   console.log(data);
    //   this.downgrooves = data;
    // });
    this.getJson("downgrooves").subscribe((x) => (this.downgrooves = x));
    this.getJson("eric-rylos").subscribe((x) => (this.ericRylos = x));
    this.getJson("evotone").subscribe((x) => (this.evotone = x));
    this.getJson("mario-and-eric-j").subscribe((x) => (this.mej = x));
  }

  getJson(name) {
    return this.httpClient.get("assets/" + name + ".json");
  }
}
