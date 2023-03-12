import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-deplogin',
  templateUrl: './deplogin.component.html',
  styleUrls: ['./deplogin.component.scss'],
})
export class DeploginComponent implements OnInit {
  deploginForm: any = FormGroup;
  submitted = false;
  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.deploginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.deploginForm.controls;
  }

  loginSubmit() {
    this.submitted = true;
    if (this.deploginForm.invalid) {
      return;
    }
    this.Submitlogin();
  }
  Submitlogin() {
    this.auth.postDepLogin(this.deploginForm.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.Token);
        alert('Login successful');
        this.deploginForm.reset();
        this.router.navigate(['/department']);
      },
      (error: any) => {
        alert('** Please check email or password is correct!');
        this.deploginForm.reset();
      }
    );
  }
}
