import { Component } from '@angular/core';

@Component({
  selector: 'app-logos',
  imports: [],
  templateUrl: './logos.component.html',
  styleUrl: './logos.component.scss'
})
export class LogosComponent {
  technologies = [
    { name: 'Python', icon: 'python' },
    { name: 'Angular', icon: 'angular' },
    { name: 'Node.js', icon: 'nodedotjs' },
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Docker', icon: 'docker' },
    { name: 'Google Cloud', icon: 'googlecloud' },
    { name: 'Supabase', icon: 'supabase' },
    { name: 'React', icon: 'react' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'TensorFlow', icon: 'tensorflow' },
    { name: 'Redis', icon: 'redis' },
  ];
}
