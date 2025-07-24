import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../services/film.service';
import {Film} from '../../models/film.model';


@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  films: Film[] = [];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    // On récupere les films par le service Film + méthode getFilms
    this.filmService.getFilms().subscribe({
      // dans le next on recupere le type que nous avons recuperé dans le service
      next: (response) => {
        console.log('Films reçus:', response.data);
        console.log(response.code);
        console.log(response.data);
        console.log(response.message);
        this.films = response.data;
      },
      error: (err) => console.error('Erreur API:', err)
    });
  }
// plus tard on peut faire refactor de cette méthode pour le reutiliser
  getStarsArray(): number[] {
    return [1, 2, 3, 4, 5];
  }

  protected readonly Math = Math;
}
