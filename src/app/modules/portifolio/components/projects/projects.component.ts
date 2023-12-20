import { Component, signal } from '@angular/core';
import { IProjects } from '../../interfaces/projects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjetcs = signal<IProjects[]>([
  {
    src: 'assets/img/projects/vfull.png',
    alt: '',
    title: 'Vida FullStack',
    width: '100px',
    height: '51px',
    description: '<p>Explore o fascinante mundo do desenvolvimento web.',
    links: [
      {
        name: 'Conheça o blog',
        href: 'https://vidafullstack.com.br',
      }
    ]
  }
  ])

}
