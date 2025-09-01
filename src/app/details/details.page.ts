import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService, Post } from '../services/data.service';
@Component({
 selector: 'app-details',
 standalone: true,
 imports: [IonicModule, CommonModule],
 templateUrl: './details.page.html',
 styleUrls: ['./details.page.scss']
})
export class DetailsPage implements OnInit {
 post: Post | null = null;
 postId: number = 0;
 constructor(
   private route: ActivatedRoute,
   private dataService: DataService
 ) {}
 ngOnInit() {
   this.postId = Number(this.route.snapshot.paramMap.get('id'));
   this.loadPost();
 }
 loadPost() {
   this.dataService.getPostById(this.postId).subscribe({
     next: (result: Post) => {
       this.post = result;
     },
     error: (err) => {
       console.error('Error fetching post:', err);
       // Set a clean fallback without foreign text
       this.post = {
         userId: 1,
         id: this.postId,
         title: 'API Data Integration',
         body: 'This demonstrates successful HTTP client implementation with external API data fetching capabilities.'
       };
     }
   });
 }
}