import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AgmCoreModule } from "@agm/core";
import { AgmOverlays } from "agm-overlays";
import { AgmJsMarkerClustererModule } from "@agm/js-marker-clusterer";
import { AgmSnazzyInfoWindowModule } from "@agm/snazzy-info-window";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AgmOverlays,
    AgmCoreModule.forRoot({
      apiKey: ""
    }),
    AgmJsMarkerClustererModule,
    AgmSnazzyInfoWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
