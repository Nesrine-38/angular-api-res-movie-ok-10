import { Component,Output,Input,EventEmitter, OnInit} from '@angular/core';
import { Movie } from '../entities';
import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  list:Movie[] = [];


  constructor(private service:MovieserviceService){}

  ngOnInit(): void {
    this.service.fetchAll()
    .subscribe(data => this.list = data);
  }

  toList(movie:Movie) {
    this.service.add(movie).subscribe(data => this.list.push(data));
  }

  removeMovie(movie:Movie){
    if(movie.id){
      this.service.delete(movie.id).subscribe(()=> this.list= this.list.filter(item =>item.id != movie.id));
      // filter
    }
  }


}

