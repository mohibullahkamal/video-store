import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  
  @Input() x: Hero;
  onSelect(z: Hero): void {
    this.x = z;
  }

  constructor() { }
  ngOnInit() { }
}
