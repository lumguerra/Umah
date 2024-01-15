import { ContatoContainerComponent } from './../../components/contato-container/contato-container.component';
import { ContatoBannerComponent } from './../../components/contato-banner/contato-banner.component';
import { FooterComponent } from './../../components/footer/footer.component';
import { NavbarComponent } from './../../components/navbar/navbar.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ContatoBannerComponent, ContatoContainerComponent],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

}
