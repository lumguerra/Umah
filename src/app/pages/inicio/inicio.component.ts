import { InicioServicosComponent } from './../../components/inicio-servicos/inicio-servicos.component';
import { InicioSobreComponent } from './../../components/inicio-sobre/inicio-sobre.component';
import { BannerMainComponent } from './../../components/banner-main/banner-main.component';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NavbarComponent, BannerMainComponent, InicioSobreComponent, InicioServicosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
