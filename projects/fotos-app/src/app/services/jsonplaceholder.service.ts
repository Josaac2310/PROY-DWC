import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Foto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getFotos(limit: number, start: number): Observable<Foto[]> {
    return this.http.get<Foto[]>(`${this.apiUrl}?_start=${start}&_limit=${limit}`);
  }

  getFotoById(id: number): Observable<Foto> {
    return this.http.get<Foto>(`${this.apiUrl}/${id}`);
  }
}