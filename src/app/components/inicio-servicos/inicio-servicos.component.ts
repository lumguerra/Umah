import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-servicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio-servicos.component.html',
  styleUrl: './inicio-servicos.component.css'
})
export class InicioServicosComponent {
  services = [
    {
      title: 'Serviço 1',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
      image: '../../../assets/sethscope.png'
    },
    {
      title: 'Serviço 2',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
      image: '../../../assets/brain.png'
    },
    {
      title: 'Serviço 3',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
      image: '../../../assets/card.png'
    },
  ];
}
