import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
 providedIn: 'root'
})
export class DataService {
 private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example API
 constructor(private http: HttpClient) {}
 // Fetch posts
 getPosts(): Observable<any[]> {
   return this.http.get<any[]>(this.apiUrl);
 }
 // Fetch a single post by id
 getPost(id: number): Observable<any> {
   return this.http.get<any>(`${this.apiUrl}/${id}`);
 }
}