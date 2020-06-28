import { Component, OnInit } from "@angular/core";
import * as SummaryJson from "../../../assets/software/professional-summary.json";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-software",
  templateUrl: "./software.component.html",
  styleUrls: ["./software.component.css"],
})
export class SoftwareComponent implements OnInit {
  public summary;
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get("assets/software/professional-summary.json")
      .subscribe((data) => {
        console.log(data);
        this.summary = data;
      });
  }
}
