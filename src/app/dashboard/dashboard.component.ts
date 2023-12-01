import { Component, OnInit } from '@angular/core';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { Hero } from '../Hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes: Hero[] = []
  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes() :void {
    this.heroService.getHeroesMock().subscribe(heroes => this.heroes = heroes.slice(1,5))
  }

}
