import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../entities';
import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  term:""
result:Movie[] = [];
constructor(private service:MovieserviceService){}

DoSearch(term:string){
  if(term.length <2){
    this.result = [];
  }else{
  this.service.search(term)
  .subscribe(data => this.result= data);
}}


}
