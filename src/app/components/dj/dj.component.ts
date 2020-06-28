import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as _ from "lodash";
import { Observable } from "rxjs";

@Component({
  selector: "app-dj",
  templateUrl: "./dj.component.html",
  styleUrls: ["./dj.component.css"],
})
export class DjComponent implements OnInit {
  public mixes;
  public vocal;
  public classics;
  public progressive;
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getMixes();
  }

  getMixes() {
    this.httpClient.get("assets/mixes-db.json").subscribe((data) => {
      console.log(data);
      this.mixes = _.chain(data).sortBy(data, ["CreateDate", "desc"]);
      console.log(this.mixes);
      this.vocal = this.mixes.filter((x) => {
        x.Category === "Vocal";
      });
      console.log(this.vocal);
    });
  }
}
