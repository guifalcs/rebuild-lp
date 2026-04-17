import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PresMissionComponent } from './sections/pres-mission/pres-mission.component';
import { PresValuesComponent } from './sections/pres-values/pres-values.component';
import { PresProblemComponent } from './sections/pres-problem/pres-problem.component';
import { PresSolutionsComponent } from './sections/pres-solutions/pres-solutions.component';
import { PresShowcaseComponent } from './sections/pres-showcase/pres-showcase.component';
import { PresProcessComponent } from './sections/pres-process/pres-process.component';
import { PresTeamComponent } from './sections/pres-team/pres-team.component';
import { PresCtaComponent } from './sections/pres-cta/pres-cta.component';

@Component({
  selector: 'app-presentation',
  imports: [
    RouterLink,
    PresMissionComponent,
    PresValuesComponent,
    PresProblemComponent,
    PresSolutionsComponent,
    PresShowcaseComponent,
    PresProcessComponent,
    PresTeamComponent,
    PresCtaComponent,
  ],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss',
})
export class PresentationComponent {}
