import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-producer",
  templateUrl: "./producer.component.html",
  styleUrls: ["./producer.component.css"],
})
export class ProducerComponent implements OnInit {
  products;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get("assets/downgrooves.json").subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }
}
