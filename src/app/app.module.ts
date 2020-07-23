import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { ProducerComponent } from "./components/producer/producer.component";
import { RemixerComponent } from "./components/remixer/remixer.component";
import { ModularComponent } from "./components/modular/modular.component";
import { DjComponent } from "./components/dj/dj.component";
import { EngineerComponent } from "./components/engineer/engineer.component";
import { DeveloperComponent } from "./components/developer/developer.component";
import { HomeComponent } from "./components/home/home.component";
import { ErrorComponent } from "./components/error/error.component";
import { SongDetailComponent } from "./components/song-detail/song-detail.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { SoftwareComponent } from "./components/software/software.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactThanksComponent } from "./components/contact-thanks/contact-thanks.component";
import { ReplacePipe } from "./replace.pipe";
import { TrackListComponent } from './components/producer/track-list/track-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProducerComponent,
    RemixerComponent,
    ModularComponent,
    DjComponent,
    EngineerComponent,
    DeveloperComponent,
    HomeComponent,
    ErrorComponent,
    SongDetailComponent,
    SoftwareComponent,
    ContactComponent,
    FooterComponent,
    ContactThanksComponent,
    ReplacePipe,
    TrackListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
