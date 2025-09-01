import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Post {
 userId: number;
 id: number;
 title: string;
 body: string;
}
@Injectable({
 providedIn: 'root'
})
export class DataService {
 private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
 constructor(private http: HttpClient) { }
 // Get all posts
 getPosts(): Observable<Post[]> {
   return this.http.get<Post[]>(this.apiUrl);
 }
 // Get a single post by ID - ADD THIS METHOD
 getPostById(id: number): Observable<Post> {
   return this.http.get<Post>(`${this.apiUrl}/${id}`);
 }
 // Alternative method name if you prefer
 getPost(id: number): Observable<Post> {
   return this.http.get<Post>(`${this.apiUrl}/${id}`);
 }
}