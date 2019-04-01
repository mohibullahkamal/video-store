import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  // abc: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  selectedX: Hero;
  onSelect(x: Hero): void {
    this.selectedX = x;
  }
  
  constructor() { }

  ngOnInit() {
  }
}

