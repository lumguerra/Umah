import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-inicio-equipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio-equipe.component.html',
  styleUrl: './inicio-equipe.component.css'
})
export class InicioEquipeComponent {
  subTitle= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
  equipe = [
    { 
      nome: 'Fulano de Tal',
      especialidade: 'Especialidade 1',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imagemUrl:  '../../../assets/medic_exemple_2.png'
    },
    { 
      nome: 'Ciclano de Tal',
      especialidade: 'Especialidade 2',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imagemUrl: '../../../assets/medic_exemple_1.png'
    },
  ];

}
