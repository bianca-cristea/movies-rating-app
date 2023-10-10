import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  htmlString = '';

  checkCredentials() {
    if (this.username.trim().length === 0 || this.password.length === 0)
      this.htmlString = 'Both fields are required';
    else if (!(this.username === 'Bianca' && this.password === 'Cristea'))
      this.htmlString = `<p>upsss... password or username is wrong.</p>`;
    else {
      this.htmlString = '';
    }
  }
}
