import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-horario-funcionamento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horario-funcionamento.component.html',
  styleUrl: './horario-funcionamento.component.css'
})
export class HorarioFuncionamentoComponent {
  horariosSemana = [
    { dia: 'Segunda-feira', horario: '09:00 - 12:00 / 13:00 - 18:00' },
    { dia: 'Terça-feira', horario: '09:00 - 12:00 / 13:00 - 18:00' },
    { dia: 'Quarta-feira', horario: '09:00 - 12:00 / 13:00 - 18:00' },
    { dia: 'Quinta-feira', horario: '09:00 - 12:00 / 13:00 - 18:00' },
    { dia: 'Sexta-feira', horario: '09:00 - 12:00 / 13:00 - 18:00' },
    { dia: 'Sábado', horario: '09:00 - 12:00 / 13:00 - 18:00' },
    { dia: 'Domingo ', horario: 'Fechado' }
  ];
}
