import { Component, OnInit } from "@angular/core";
import { MOCK_WHERE_WE_JET_MARKER } from "./mock-data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "angular-map";
  latitude = 0;
  longitude = 0;
  markers = [];
  constructor() {}

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.latitude = pos.coords.latitude;
        this.longitude = pos.coords.longitude;
      });
    }
    Object.keys(MOCK_WHERE_WE_JET_MARKER).forEach(item => {
      this.markers.push({
        markerId: item,
        coords: MOCK_WHERE_WE_JET_MARKER[item]
      });
    });
  }

  onMapClick(clickedCoordinate) {
    console.log("Cluster details for", clickedCoordinate);
  }
}

/**
 * (AIza) - is the first
 * (SyC3jNzdySl) - is the second
 * (kMEuXKX) - is the third
 * (-GFv0CvohSEyg1GcI-Z) - is the fourth
 */
