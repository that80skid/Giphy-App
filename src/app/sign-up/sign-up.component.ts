import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup

  constructor(private userService: UserService, private fb: FormBuilder) { }

  signup() {
    // 2-20 characters for the username
    // 4-16 characters for the password
    if (this.signupForm.valid) {
      this.userService.signup(this.signupForm.get("username").value, this.signupForm.get("password").value);
    }
  }

  ngOnInit(): void {
    // Build the form
    this.signupForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(16)])]
    });
  }
}
