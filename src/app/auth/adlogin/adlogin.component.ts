import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrls: ['./adlogin.component.scss']
})
export class AdloginComponent implements OnInit {
  adminloginForm: any = FormGroup;
  submitted = false;
  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private authGuard:AuthGuard
  ) {}
  ngOnInit(): void {
    this.adminloginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.adminloginForm.controls;
  }

  loginSubmit() {
    this.submitted = true;
    if (this.adminloginForm.invalid) {
      return;
    }
    this.Submitlogin();
  }
  Submitlogin() {
   
    this.auth.postAdLogin(this.adminloginForm.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.Token);
        alert('Login successful');
        this.adminloginForm.reset();
          this.router.navigate(['/admin']);
      },
      (error: any) => {
        alert('** Please check email or password is correct!');
        this.adminloginForm.reset();
      }
    );
  }
}
