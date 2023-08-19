import { Component,Output,Input, EventEmitter } from '@angular/core';
import { Movie } from '../entities';

@Component({
  selector: 'app-formmovie',
  templateUrl: './formmovie.component.html',
  styleUrls: ['./formmovie.component.css']
})
export class FormmovieComponent {
  @Input()
  movie:Movie = {title: '', content:'', released: '', duration: 0};

  @Output()
  added = new EventEmitter<Movie>();


  handleSubmit() {
     this.added.emit(this.movie);
  }

}
