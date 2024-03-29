import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat, toLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {

  @ViewChild('mapElement', { static: true }) mapElement: ElementRef | undefined;

  map: Map | undefined;

  ngOnInit(): void {
    this.initMap();
  }

  ngOnDestroy(): void {
    this.map?.setTarget(undefined);
  }

  private initMap(): void {
    this.map = new Map({
      target: this.mapElement?.nativeElement,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([20.242829157757257, 63.82811461193097]),
        zoom: 11
      })
    });

    this.map.on('singleclick', this.handleMapClick.bind(this))
  }

  private handleMapClick(event: any): void {
    console.log(`Zoom level: ${this.map?.getView().getZoom()}`);
    console.log(`Map coordinates (wgs84): ${toLonLat(event.coordinate)}`);
    console.log(`Pixel coordinates (top-left): ${event.pixel}`);
  }
}