import { ServicosBannerComponent } from './../../components/servicos-banner/servicos-banner.component';
import { NavbarComponent } from './../../components/navbar/navbar.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [NavbarComponent, ServicosBannerComponent],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent {

}
