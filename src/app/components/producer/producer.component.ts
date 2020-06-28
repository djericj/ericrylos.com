import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import * as moment from "moment";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-producer",
  templateUrl: "./producer.component.html",
  styleUrls: ["./producer.component.css"],
})
export class ProducerComponent implements OnInit {
  public moment: any = moment;
  public evotoneTracks;
  public downgroovesTracks;
  public ericRylosTracks;
  public marioEricJTracks;
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.evotoneTracks = _.chain(this.getData("assets/evotone.json"))
      .filter((x) => x.artistName.indexOf("Evotone") > -1)
      .uniqBy(this.evotoneTracks, "trackName")
      .orderBy("releaseDate", "desc");

    this.ericRylosTracks = _.chain(this.getData("assets/eric-rylos.json"))
      .filter((x) => x.artistName.indexOf("Eric Rylos") > -1)
      .uniqBy(this.ericRylosTracks, "trackName")
      .orderBy("releaseDate", "desc");

    this.downgroovesTracks = _.chain(this.getData("assets/downgrooves.json"))
      .filter((x) => x.artistName.indexOf("Downgrooves") > -1)
      .uniqBy(this.downgroovesTracks, "trackName")
      .orderBy("releaseDate", "desc");

    this.marioEricJTracks = _.chain(
      this.getData("assets/mario-and-eric-j.json")
    )
      .filter((x) => x.artistName.indexOf("Mario & Eric J") > -1)
      .uniqBy(this.marioEricJTracks, "trackName")
      .orderBy("releaseDate", "desc");
  }

  getData(name): any {
    this.httpClient.get(name).subscribe((data) => {
      console.log(data);
      return data;
    });
  }
}
