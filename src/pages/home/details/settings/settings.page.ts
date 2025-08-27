import { Component, OnInit } from '@angular/core';

import { IonContent, IonHeader, IonToolbar, IonTitle, IonInput, IonButton } from '@ionic/angular/standalone';

import { StorageService } from '../../services/storage.service';

@Component({

  standalone: true,

  selector: 'app-settings',

  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonInput, IonButton],

  templateUrl: './settings.page.html',

  styleUrls: ['./settings.page.scss']

})

export class SettingsPage implements OnInit {

  username: string = '';

  constructor(private storageService: StorageService) {}

  async ngOnInit() {

    const savedName = await this.storageService.get('username');

    if (savedName) {

      this.username = savedName;

    }

  }

  async saveName() {

    await this.storageService.set('username', this.username);

    alert('Saved!');

  }

}
 