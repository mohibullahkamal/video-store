import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero = 'Windstorm';
  var1 = 'this is var one';
  var2 = 'this is var two';

  constructor() { }

  ngOnInit() {
  }

}
