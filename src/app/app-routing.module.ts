import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SinglemovieComponent } from './singlemovie/singlemovie.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  {path:'movie/:id', component: SinglemovieComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
