import { Component, OnInit } from '@angular/core';
import { Movie } from '../entities';
import { ActivatedRoute } from '@angular/router';
import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-singlemovie',
  templateUrl: './singlemovie.component.html',
  styleUrls: ['./singlemovie.component.css']
})
export class SinglemovieComponent  implements OnInit{
  movie:Movie;
  editing=false;
  constructor(private route:ActivatedRoute, private service:MovieserviceService){}

  ngOnInit(): void {
    this.route.params.subscribe(params =>this.service.fetchOne(params['id']).subscribe(data => {
      this.movie = data}));
  }
  updateMovie(movie:Movie){
    this.service.update(movie).subscribe(data =>
      {this.movie = data;
        this.editing=false;
      });
  }


}


