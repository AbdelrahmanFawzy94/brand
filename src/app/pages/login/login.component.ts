import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private _FormBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this._FormBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
