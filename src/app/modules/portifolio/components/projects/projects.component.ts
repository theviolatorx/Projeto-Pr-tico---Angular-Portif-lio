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
    src: 'assets/img/projects/lista-de-tarefas.png',
    alt: '',
    title: 'To-Do List',
    width: '100px',
    height: '51px',
    description: '<p>Projeto em Angular de uma lista de tarefas realizadas nos curso da VidaFullStack e Santander Coders 2023.<p>',
    links: [
      {
        name: 'Conheça o blog',
        href: 'https://vidafullstack.com.br',
      }
    ]
  },
  {
    src: 'assets/img/projects/crud.jpg',
    alt: '',
    title: 'CRUD Angular - Santander Coders 2023',
    width: '100px',
    height: '51px',
    description: '<p>CRUD em Angular para o curso de Front-end do Santander Coders 2023.<p>',
    links: [
      {
        name: 'Conheça o projeto!',
        href: 'https://project-crud-angular-ada-santander.vercel.app/',
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
