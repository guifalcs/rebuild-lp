import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeroComponent } from '../sections/hero/hero.component';
import { AboutComponent } from '../sections/about/about.component';
import { ProcessComponent } from '../sections/process/process.component';
import { SolutionsComponent } from '../sections/solutions/solutions.component';
import { CtaComponent } from '../sections/cta/cta.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent, ProcessComponent, SolutionsComponent, CtaComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
