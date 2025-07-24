import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Film {
  id: number;
  slug: string;
  title: string;
  year: number;
  author: string;
  duration: number;
  genre: string;
  synopsis: string;
  cover: string;
  rating: number;
}

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  films: Film[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ code: string; message: string; data: Film[] }>('http://localhost:3000/movies').subscribe({
      next: (response) => {
        console.log('Films reçus:', response.data);
        this.films = response.data;
      },
      error: (err) => console.error('Erreur API:', err)
    });
  }

  getStarsArray(): number[] {
    return [1, 2, 3, 4, 5];
  }

  protected readonly Math = Math;
}
