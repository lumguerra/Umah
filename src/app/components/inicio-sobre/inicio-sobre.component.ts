import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-sobre',
  standalone: true,
  imports: [],
  templateUrl: './inicio-sobre.component.html',
  styleUrl: './inicio-sobre.component.css'
})
export class InicioSobreComponent {
  mainText = 'Sobre a';
  subText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only ";
  
}
