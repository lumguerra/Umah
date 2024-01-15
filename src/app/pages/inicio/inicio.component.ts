import { FooterComponent } from './../../components/footer/footer.component';
import { InicioEquipeComponent } from './../../components/inicio-equipe/inicio-equipe.component';
import { InicioMapaComponent } from './../../components/inicio-mapa/inicio-mapa.component';
import { HorarioFuncionamentoComponent } from './../../components/horario-funcionamento/horario-funcionamento.component';
import { InicioServicosComponent } from './../../components/inicio-servicos/inicio-servicos.component';
import { InicioSobreComponent } from './../../components/inicio-sobre/inicio-sobre.component';
import { BannerMainComponent } from './../../components/banner-main/banner-main.component';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NavbarComponent,
    BannerMainComponent,
    InicioSobreComponent,
    InicioServicosComponent,
    HorarioFuncionamentoComponent,
    InicioMapaComponent,
    InicioEquipeComponent,
    FooterComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
