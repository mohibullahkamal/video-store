import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent {
  // hero = 'Windstorm';
  // hero :Hero = { id: 1, name: 'Windstorm' };
  hero = HEROES;


  constructor() { }
}