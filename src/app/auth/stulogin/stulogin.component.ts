import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-stulogin',
  templateUrl: './stulogin.component.html',
  styleUrls: ['./stulogin.component.scss']
})
export class StuloginComponent implements OnInit{
  stuloginForm: any = FormGroup;
  submitted = false;
  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.stuloginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.stuloginForm.controls;
  }

  loginSubmit() {
    this.submitted = true;
    if (this.stuloginForm.invalid) {
      return;
    }
    this.Submitlogin();
  }
  Submitlogin() {
    this.auth.postStuLogin(this.stuloginForm.value).subscribe(
      (res: any) => {
        localStorage.setItem('Token', res.Token);
        alert('Login successful');
        this.stuloginForm.reset();
        this.router.navigate(['/student']);
      },
      (error: any) => {
        alert('** Please check email or password is correct!');
        this.stuloginForm.reset();
      }
    );
  }
}
