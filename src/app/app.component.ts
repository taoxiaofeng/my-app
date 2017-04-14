import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service'

@Component({
  selector: 'my-app',
  templateUrl:'app.component.html' ,
  styleUrls: ['app.component.css'],
  providers:[HeroService]
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  // heroes = HEROES;
  heroes:Hero[];
  selectedHero:Hero;
  constructor(private heroService: HeroService){}
  getHeroes():void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  ngOnInit() {
    this.getHeroes();
  }
  
  onSelect(hero:Hero):void {
    this.selectedHero = hero;
  }
}
