import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, Observable, tap } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { Iregistration } from '../service/auth.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  registerDatas: Iregistration[] = [];
  registerForm: any = FormGroup;
  submitted = false;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  registerProcess() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.getRegister();
  }

  getRegister() {
    this.registerDatas = this.registerForm.value;
    const inputElement = document.getElementById('email') as HTMLInputElement;
    const inputValue = inputElement.value;

    this.auth.getregister().subscribe((res) => {
      const data = res;

      const final = data.find((data: { _id: number }) => data._id == data._id);
      if (data.length == 0) {
        this.postData();
      } else if (final.email == inputValue) {
        alert('email is already exists');
        this.registerForm.reset();
      } else {
        this.auth
          .postregister(this.registerForm.value)
          .subscribe((result: any) => {
            alert('Data Register Successfull');
            this.registerForm.reset();
            this.router.navigate(['/login/']);
          });
        console.log(this.registerDatas);
      }
    });
  }

  postData() {
    this.auth.postregister(this.registerForm.value).subscribe((result: any) => {
      alert('Data Register Successfull');
      const data = result;
      this.registerForm.reset();
      this.router.navigate(['/']);
    });
    console.log(this.registerDatas);
  }
}
