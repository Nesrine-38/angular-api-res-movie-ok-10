import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './entities';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  constructor(private http:HttpClient) {}

  fetchAll() {
    return this.http.get<Movie[]>('https://127.0.0.1:8000/api/movie');
    //.pipe(map(data => data.map(item => ({...item, released:item.released.substring(0,10)})))); POUR RECUPERE LA DATE DANS NOTRE FORMULAIRE
  }
  fetchOne(id:any){
    return this.http.get<Movie>('https://127.0.0.1:8000/api/movie/'+id);
  }

  add(movie:Movie){
     return this.http.post<Movie>('https://127.0.0.1:8000/api/movie', movie);
  }
  delete(id:number){
    return this.http.delete<void>('https://127.0.0.1:8000/api/movie/'+id);
  }
  update(movie:Movie) {
    return this.http.put<Movie>('https://127.0.0.1:8000/api/movie/'+movie.id, movie);
  }
  search(term:string){
    return this.http.get<Movie[]>('https://127.0.0.1:8000/api/movie/search/'+term);
  }

}
