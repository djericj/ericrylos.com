import { Component, OnInit, Input } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-song-detail",
  template: `<strong>{{ song.artistName }}</strong> -
    {{ song.trackCensoredName }}
    <small>{{ moment(song.releaseDate).format("YYYY") }}</small>`,
  styleUrls: ["./song-detail.component.css"],
})
export class SongDetailComponent implements OnInit {
  @Input("song") song;
  public moment: any = moment;
  constructor() {}

  ngOnInit() {}
}
