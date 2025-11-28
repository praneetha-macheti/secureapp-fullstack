import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Required for [(ngModel)]
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, SignupComponent, LoginComponent],
  template: `
    <div class="container mt-4">
      <h1 class="text-center mb-4">Secure App</h1>
      <app-signup></app-signup>
      <app-login></app-login>
    </div>
  `,
  styleUrls: ['./app.css']
})
export class AppComponent {}
