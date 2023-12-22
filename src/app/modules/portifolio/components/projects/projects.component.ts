import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interfaces/projects.interface';


// Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enums/EDialogPanelClass.enum';

// Components Dialog
import { DialogProjectsComponent } from '../dialogs/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  #dialog = inject(MatDialog);


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
  },
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
  },
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
  },
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
  },
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
  },
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
  },

  ])

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }

}
