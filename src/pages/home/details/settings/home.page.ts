
import { Component, OnInit } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

import { Storage } from '@ionic/storage-angular';

@Component({

  selector: 'app-home',

  standalone: true,

  imports: [IonicModule, CommonModule, FormsModule, ],

  templateUrl: './home.page.html',

  styleUrls: ['./home.page.scss']

})

export class HomePage implements OnInit {

  users: any[] = [];

  favorites: string[] = [];

  newItem: string = '';

  constructor(private http: HttpClient, private storage: Storage) {}

  async ngOnInit() {

    const saved = await this.storage.get('favorites');

    if (saved) this.favorites = saved;

  }

  async addFavorite() {

    if (this.newItem.trim()) {

      this.favorites.push(this.newItem.trim());

      await this.storage.set('favorites', this.favorites);

      this.newItem = '';

    }

  }

  fetchData() {

    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')

      .subscribe(data => this.users = data);

  }

}
 