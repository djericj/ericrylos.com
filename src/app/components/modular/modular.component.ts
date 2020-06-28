import { Component, OnInit } from "@angular/core";
import * as Videos from "../../../assets/youtube.playlist.json";

@Component({
  selector: "app-modular",
  templateUrl: "./modular.component.html",
  styleUrls: ["./modular.component.css"],
})
export class ModularComponent implements OnInit {
  public videos;
  constructor() {}

  ngOnInit() {
    this.videos = Videos;
    console.log(this.videos.default.items);
  }
}
