import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ScrollRevealDirective } from '../../../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-pres-brands',
  imports: [NgFor, ScrollRevealDirective],
  templateUrl: './pres-brands.component.html',
  styleUrl: './pres-brands.component.scss',
})
export class PresBrandsComponent {
  readonly brands = [
    { name: 'Meta', logo: 'meta.png' },
    { name: 'IBM', logo: 'ibm.png' },
    { name: 'BTG Pactual', logo: 'btg-pactual.png' },
    { name: 'Contabilizei', logo: 'contabilizei.png' },
    { name: 'ASIS by Sankhya', logo: 'asis.png' },
    { name: 'Certificar', logo: 'certificar.png' },
    { name: 'Support Health', logo: 'support-health.png' },
  ];
}
