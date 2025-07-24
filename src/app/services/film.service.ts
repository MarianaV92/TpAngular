import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ApiResponse} from '../models/api-response.model';
import {Film} from '../models/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) {

  }

  // Premiere version pour chopper une API sans interface on peux dire qu'on recupere any
 // getFilms() : Observable<any> {
    // pour le moment on laisse en any plus tard on va specifier
   // return this.http.get<any>("http://localhost:3000/movies");

  //}
  // ensuite on va creer  des models soit interfaces
  // ici on va aller chopper une api mais avec les entreface ApiReponse + Film en tableau
  getFilms(): Observable<ApiResponse<Film[]>> {
    return this.http.get<ApiResponse<Film[]>>("http://localhost:3000/movies");
  }

}
