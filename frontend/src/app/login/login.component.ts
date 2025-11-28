import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { username: '', password: '' };
  message = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:8080/api/login', this.user).subscribe({
      next: (res: any) => {
        this.message = 'Login successful!';
        console.log(res);
      },
      error: (err) => {
        this.message = 'Invalid credentials!';
        console.error(err);
      }
    });
  }
}
