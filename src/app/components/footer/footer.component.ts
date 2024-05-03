import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  isMobile = this.checkIfMobile();
  textCol1= "Lorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesettingLorem Ipsum is simply dummy text of the printing and typesetting";
  logoPath = "../../../assets/umah-white-logo.png";

  horariosTitulo = 'Horários';
  horariosTexto = [
    'Segunda - 09:00 às 12:00 - 13:00 às 18:00',
    'Terça - 09:00 às 12:00 - 13:00 às 18:00',
    'Quarta - 09:00 às 12:00 - 13:00 às 18:00',
    'Quinta - 09:00 às 12:00 - 13:00 às 18:00',
    'Sexta - 09:00 às 12:00 - 13:00 às 18:00',
    'Sábado - 09:00 às 12:00',
    'Domingo - Fechado'
  ];

  servicosTitulo = 'Serviços';
  servicosTexto = [
    'Serviço 1',
    'Serviço 2',
    'Serviço 3',
    'Serviço 4'
  ];

  contatoTitulo = 'Contato';
  contatoTexto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';


  instagramIcon = "../../../assets/instagram.png";
  facebookIcon = "../../../assets/facebook.png";

  email = "contato@umah.com";
  endereco = "Rua das Flores, 77 - Jardim Social - Curitiba/PR"
  telefone = "(41) 97777-7777 / (41) 97777-7777"

  private checkIfMobile(): boolean {
    return window.innerWidth < 768; 
}

}
