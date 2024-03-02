import { CommonModule } from '@angular/common';
import {Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent { 
  constructor( private router : Router){


  }
  test(){
    this.router.navigate(['/notFound']);
  }
}
