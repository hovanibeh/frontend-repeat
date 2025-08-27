import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({

 providedIn: 'root'

})

export class StorageService {

 private _storage: Storage | null = null;

 constructor(private storage: Storage) {

   this.init();

 }

 // Initialize Ionic Storage

 async init() {

   const storage = await this.storage.create();

   this._storage = storage;

 }

 // Save key/value

 async set(key: string, value: any) {

   await this._storage?.set(key, value);

 }

 // Get value by key

 async get(key: string) {

   return await this._storage?.get(key);

 }

 // Remove value

 async remove(key: string) {

   await this._storage?.remove(key);

 }

 // Clear all storage

 async clear() {

   await this._storage?.clear();

 }

}
 