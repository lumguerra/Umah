import { Component } from '@angular/core';

@Component({
  selector: 'app-contato-container',
  standalone: true,
  imports: [],
  templateUrl: './contato-container.component.html',
  styleUrl: './contato-container.component.css'
})
export class ContatoContainerComponent {

  email = 'email@email.com'
  endereco = 'Rua rua'
  telefone = '(41) 97899-4444'
}
