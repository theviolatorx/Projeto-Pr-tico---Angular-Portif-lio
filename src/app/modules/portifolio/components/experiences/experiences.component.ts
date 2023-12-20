import { Component, signal } from '@angular/core';

//Interface
import { IExperience } from '../../interfaces/experiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperience[]>([
    {
      summary: {
        strong : 'TI Especialista',
        p: 'Centro Imobiliário | Jun 2016 - Present',
      },
      text: '<p>Atuando em várias áreas de TI na empresa, desde suporte ao sistema até elaboração de páginas web.',
    },
    {
      summary: {
        strong : 'Técnico Especialista',
        p: 'JRTech Ponto | Set 2014 - Mai 1026',
      },
      text: '<p>Atuei como técnico na instalação de controles de acesso e treinamento dos equipamentos. Além de criar o monitoramento dos equipamentos usando Zabbix.',
    },
  ]);

}
