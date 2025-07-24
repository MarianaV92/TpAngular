import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../services/film.service';
import {Film} from '../../models/film.model';

declare const UIkit: any;

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  films: Film[] = [];
  isLoading: boolean = false;

  constructor(private filmService: FilmService) {}


  ngOnInit(): void {
    // Affiche le loader UIkit
    this.isLoading = true;
    UIkit.modal("#modal-loading").show();

    // On récupère les films via le service
    this.filmService.getFilms().subscribe({
      next: (response) => {
        // Attend 1 seconde avant de cacher le loader
        setTimeout(() => {
          console.log('Films reçus:', response.data);
          console.log(response.code);
          console.log(response.message);
          this.films = response.data;
          this.isLoading = false;
          UIkit.modal("#modal-loading").hide(); // Ferme le loader
        }, 1000);
      },
      error: (err) => {
        // En cas d’erreur, on affiche dans la console puis cache le loader
        console.error('Erreur API:', err);
        this.isLoading = false;
        UIkit.modal("#modal-loading").hide();
      }
    });
  }

// plus tard on peut faire refactor de cette méthode pour le reutiliser
  getStarsArray(): number[] {
    return [1, 2, 3, 4, 5];
  }

  protected readonly Math = Math;
}
