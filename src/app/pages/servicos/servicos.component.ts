import { FooterComponent } from './../../components/footer/footer.component';
import { ContainerServicosComponent } from './../../components/container-servicos/container-servicos.component';
import { ServicosBannerComponent } from './../../components/servicos-banner/servicos-banner.component';
import { NavbarComponent } from './../../components/navbar/navbar.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [NavbarComponent, ServicosBannerComponent, ContainerServicosComponent, FooterComponent],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent {

}
