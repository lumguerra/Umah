import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormsModule } from '@angular/forms';

interface TemplateParams {
  user_name: string;
  user_email: string;
  message: string;
  subject: string;
}

@Component({
  selector: 'app-contato-container',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contato-container.component.html',
  styleUrls: ['./contato-container.component.css']
})
export class ContatoContainerComponent {
  
  email = 'email@email.com'
  endereco = 'Rua rua'
  telefone = '(41) 97899-4444'
  
  templateParams: TemplateParams = {
    user_name: '',
    user_email: '',
    message: '',
    subject: ''
  };

  constructor() {}

  sendEmail(): void {
    emailjs.send('service_p7vzg7n', 'contact_form', this.templateParams as unknown as Record<string, unknown>, 'r9ncKSxEqQIMlTMAc')
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  }
}
