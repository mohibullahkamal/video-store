import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  abc: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  xyz = 'This is a TEST!!';

  constructor() { }

  ngOnInit() {
  }

}

