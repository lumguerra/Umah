import { ContatoComponent } from './pages/contato/contato.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'servicos', component: ServicosComponent },
    { path: 'contato', component: ContatoComponent },
];
