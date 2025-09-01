import { Component, inject } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';

import { StorageService } from '../services/storage.service';

@Component({

  selector: 'app-home-pages',

  standalone: true,

  imports: [IonicModule, FormsModule, CommonModule],

  templateUrl: './home-pages.page.html',

  styleUrls: ['./home-pages.page.scss']

})

export class HomePagesPage {

  username: string = "";

  studentId: string = "";

  welcomeMessage: string = "";

  isVerified: boolean = false;

  private storageService = inject(StorageService);

  constructor(private router: Router) {

    this.loadUserData();

  }

  async loadUserData() {

    // Load saved data from storage

    const savedUsername = await this.storageService.get('username');

    const savedStudentId = await this.storageService.get('studentId');

    if (savedUsername && savedStudentId) {

      this.username = savedUsername;

      this.studentId = savedStudentId;

      this.isVerified = true;

      this.updateMessage();

    }

  }

  verifyStudent() {

    // Simple validation for G00 number (starts with G followed by numbers)

    const g00Pattern = /^G\d+$/;

    if (this.studentId && g00Pattern.test(this.studentId)) {

      this.isVerified = true;

      this.updateMessage();

      // Save to storage

      this.storageService.set('studentId', this.studentId);

    } else {

      this.welcomeMessage = "Please enter a valid G00 number (e.g., G00123456)";

      this.isVerified = false;

    }

  }

  updateMessage() {

    if (this.username.trim() && this.isVerified) {

      this.welcomeMessage = `Welcome to Front-End Development, ${this.username}! (${this.studentId})`;

      // Save username to storage

      this.storageService.set('username', this.username);

    } else if (!this.isVerified) {

      this.welcomeMessage = "Please verify your student ID first!";

    } else {

      this.welcomeMessage = "Please enter your name!";

    }

  }

  goToDetails() {

    this.router.navigate(['/details', 1]);

  }

  clearData() {

    this.username = "";

    this.studentId = "";

    this.welcomeMessage = "";

    this.isVerified = false;

    this.storageService.remove('username');

    this.storageService.remove('studentId');

  }

}
 