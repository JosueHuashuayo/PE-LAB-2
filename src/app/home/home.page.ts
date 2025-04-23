import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // Necesario para *ngIf y otras directivas comunes

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule],  // Solo importa IonicModule y CommonModule
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  latitude: number | null = null;
  longitude: number | null = null;

  async getLocation() {
    try {
      const position = await Geolocation.getCurrentPosition();
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    } catch (error) {
      console.error('Error getting location', error);
    }
  }
}

