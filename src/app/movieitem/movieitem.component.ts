import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../entities';

@Component({
  selector: 'app-movieitem',
  templateUrl: './movieitem.component.html',
  styleUrls: ['./movieitem.component.css']
})
export class MovieitemComponent {

  @Input({required: true})
  movie:Movie;

@Output()
Deleted = new EventEmitter<Movie>();

deleteMovie(): void {
  this.Deleted.emit(this.movie);
}

}
