import { NgModule, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProducerComponent } from "./components/producer/producer.component";
import { RemixerComponent } from "./components/remixer/remixer.component";
import { ModularComponent } from "./components/modular/modular.component";
import { DjComponent } from "./components/dj/dj.component";
import { ErrorComponent } from "./components/error/error.component";
import { SoftwareComponent } from "./components/software/software.component";
import { EngineerComponent } from "./components/engineer/engineer.component";
import { ContactComponent } from "./components/contact/contact.component";

const routes: Routes = [
  {
    path: "",
    component: ProducerComponent,
  },
  {
    path: "producer",
    component: ProducerComponent,
  },
  {
    path: "remixer",
    component: RemixerComponent,
  },
  {
    path: "engineer",
    component: EngineerComponent,
  },
  {
    path: "modular",
    component: ModularComponent,
  },
  {
    path: "dj",
    component: DjComponent,
  },
  {
    path: "software",
    component: SoftwareComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },

  { path: "**", component: ErrorComponent },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
      useHash: false,
      onSameUrlNavigation: "reload",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
