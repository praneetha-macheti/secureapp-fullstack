import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true, // ✅ this tells Angular it's independent
  imports: [CommonModule, FormsModule], // ✅ includes ngModel and *ngIf
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = { username: '', password: '' };
  message = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post<any>('http://localhost:8080/api/signup', this.user).subscribe({
      next: (res) => this.message = res.message || 'Signup successful!',
      error: (err) => {
        this.message = err.error?.message || 'Signup failed. Try again.';
        console.error(err);
      }
    });
  }
}
