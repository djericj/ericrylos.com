import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import * as moment from "moment";
import * as DowngroovesJson from "../../../assets/downgrooves.json";
import * as EvotoneJson from "../../../assets/evotone.json";
import * as EricRylosJson from "../../../assets/eric-rylos.json";
import * as MarioAndEricJJson from "../../../assets/mario-and-eric-j.json";
@Component({
  selector: "app-remixer",
  templateUrl: "./remixer.component.html",
  styleUrls: ["./remixer.component.css"],
})
export class RemixerComponent implements OnInit {
  public moment: any = moment;
  public evotoneTracks;
  public downgroovesTracks;
  public ericRylosTracks;
  public marioEricJTracks;
  constructor() {}

  ngOnInit() {
    this.evotoneTracks = _.chain(EvotoneJson.results)
      .filter((x) => x.artistName.indexOf("Evotone") > -1)
      .uniqBy(this.evotoneTracks, "trackName")
      .orderBy("releaseDate", "desc");

    this.ericRylosTracks = _.chain(EricRylosJson.results)
      .filter((x) => x.artistName.indexOf("Eric Rylos") > -1)
      .uniqBy(this.ericRylosTracks, "trackName")
      .orderBy("releaseDate", "desc");

    this.downgroovesTracks = _.chain(DowngroovesJson.results)
      .filter((x) => x.artistName.indexOf("Downgrooves") > -1)
      .uniqBy(this.downgroovesTracks, "trackName")
      .orderBy("releaseDate", "desc");

    this.marioEricJTracks = _.chain(MarioAndEricJJson.results)
      .filter((x) => x.artistName.indexOf("Mario & Eric J") > -1)
      .uniqBy(this.marioEricJTracks, "trackName")
      .orderBy("releaseDate", "desc");
  }
}
