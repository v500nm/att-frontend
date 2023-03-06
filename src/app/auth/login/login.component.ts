import { Component } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: any = FormGroup;
  submitted = false;
  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loginForm= this.fb.group({
      email : new FormControl('',[Validators.required, Validators.email]),
      password : new FormControl('',[Validators.required]),
    })
  }

  get f() { return this.loginForm.controls; }

  loginSubmit(){
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
    this.Submitlogin();


  }
  Submitlogin(){
   
      this.auth.postlogin(this.loginForm.value).subscribe((res:any)=>{
        localStorage.setItem('Token', res.Token);
          alert('Login successful');
        this.loginForm.reset();
        this.router.navigate(['/admin']);
      },
      (error: any) => {
        alert('** Please check email or password is correct!');
        this.loginForm.reset();
      }
      );
      
    }
    
}
