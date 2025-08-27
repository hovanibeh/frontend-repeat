import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { IonicStorageModule } from '@ionic/storage-angular';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
bootstrapApplication(AppComponent, {
 providers: [
   provideRouter(routes),
  
   provideIonicAngular(),
   importProvidersFrom(IonicStorageModule.forRoot()),
 ],
});