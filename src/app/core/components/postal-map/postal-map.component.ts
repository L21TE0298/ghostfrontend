import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import * as L from 'leaflet';
import { CommonModule } from '@angular/common';
import { mapaService } from '../../../layout/service/mapa..service';
import { icon, latLng, Layer, LeafletEvent, LeafletMouseEvent, marker, Marker, MarkerOptions, tileLayer } from 'leaflet';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-postal-map',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './postal-map.component.html',
  styleUrls: ['./postal-map.component.css']
})
export class PostalMapComponent implements OnInit, AfterViewInit {
  direccion: string | undefined;
  map: L.Map | undefined;
  postalCode: string = '';
  lat: number | undefined;
  lng: number | undefined;
  currentMarker: L.Marker | undefined;

  constructor(public dialogRef: MatDialogRef<PostalMapComponent>) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.map = L.map('map').setView([19.818233223689326, -97.36097002119746], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    const savedLat = localStorage.getItem('lat');
    const savedLng = localStorage.getItem('lng');
    const savedDireccion = localStorage.getItem('direccion'); // Obtener la dirección guardada
    if (savedLat && savedLng && savedDireccion) {
      this.lat = parseFloat(savedLat);
      this.lng = parseFloat(savedLng);
      this.direccion = savedDireccion; // Asignar la dirección a la variable
      this.map.setView([this.lat, this.lng], 13);
      this.currentMarker = L.marker([this.lat, this.lng], { icon: iconDefault }).addTo(this.map)
        .bindPopup(this.direccion) // Mostrar la dirección en el popup
        .openPopup();
    }

    this.map.on('click', (e: L.LeafletMouseEvent) => {
      const { lat, lng } = e.latlng;
      this.lat = lat;
      this.lng = lng;

      if (this.currentMarker) {
        this.map!.removeLayer(this.currentMarker);
      }

      this.currentMarker = L.marker([lat, lng]).addTo(this.map!)
        // .bindPopup(`Coordenadas: ${lat}, ${lng}`)
        .openPopup();

      localStorage.setItem('lat', lat.toString());
      localStorage.setItem('lng', lng.toString());


      this.obtenerDireccion(lat, lng, (direccion: string) => {
        this.direccion = direccion; // Guardar la dirección en la variable
        this.currentMarker!.bindPopup(`Tu Dirección: `).openPopup();
      });
    });
  }

  onSubmit(): void {

    const coordinates = this.getCoordinatesFromPostalCode(this.postalCode);
    if (coordinates && this.map) {
      this.map.setView(coordinates, 13);

      if (this.currentMarker) {
        this.map.removeLayer(this.currentMarker);
      }

      this.currentMarker = L.marker(coordinates).addTo(this.map)
        .bindPopup(`Código Postal: ${this.postalCode}`)
        .openPopup();

      localStorage.setItem('lat', coordinates[0].toString());
      localStorage.setItem('lng', coordinates[1].toString());
    
    }
  }

  obtenerDireccion(lat: number, lon: number, callback: (direccion: string) => void) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const direccion = data.display_name;
        callback(direccion);
        localStorage.setItem('direccion', direccion); 
      })
  }
  

  getCoordinatesFromPostalCode(postalCode: string): [number, number] | null {

    const postalCodeCoordinates: { [key: string]: [number, number] } = {
      '10001': [40.7128, -74.0060], 
      '94103': [37.7749, -122.4194] 
    };
    return postalCodeCoordinates[postalCode] || null;
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
