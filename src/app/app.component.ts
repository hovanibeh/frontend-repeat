import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterOutlet } from '@angular/router';
import{Device}from '@capacitor/device';
// Add Storage import
import { Storage } from '@ionic/storage-angular';
@Component({
 selector: 'app-root',
 templateUrl: 'app.component.html',
 styleUrls: ['app.component.scss'],
 standalone: true,
 imports: [IonicModule, RouterOutlet]
})
export class AppComponent {
 // Inject Storage
 private storage = inject(Storage);
 constructor() {
   this.initApp();
 }
 async initApp() {
   // Initialize storage
   await this.storage.create();
   console.log('Storage initialized');
 }
}