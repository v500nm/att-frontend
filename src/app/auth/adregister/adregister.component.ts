import { Component, OnInit } from '@angular/core';
import { IadRegistration } from '../../shared/interfaces/auth.interface';
import { HttpClient } from '@angular/common/http';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, Observable, tap } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-adregister',
  templateUrl: './adregister.component.html',
  styleUrls: ['./adregister.component.scss']
})
export class AdregisterComponent implements OnInit{
  adregisterDatas: IadRegistration[] = [];
  adminRegisterForm: any = FormGroup;
  submitted = false;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.adminRegisterForm = this.fb.group({
      name: ['', Validators.required],
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
    return this.adminRegisterForm.controls;
  }

  registerProcess() {
    this.submitted = true;
    if (this.adminRegisterForm.invalid) {
      return;
    }

    this.getRegister();
  }

  getRegister() {
    this.adregisterDatas = this.adminRegisterForm.value;

    const inputElement = document.getElementById('email') as HTMLInputElement;
    const inputValue = inputElement.value;

    this.auth.getAdRegister().subscribe((res) => {
      const data = res;

      const final = data.find((data: { _id: number }) => data._id == data._id);
      if (data.length == 0) {
        this.postData();
      } else if (final.email == inputValue) {
        alert('email is already exists');
        this.adminRegisterForm.reset();
      } else {
        this.auth
          .postAdRegister(this.adminRegisterForm.value)
          .subscribe((result: any) => {
            alert('Data Register Successfull');
            this.adminRegisterForm.reset();
            this.router.navigate(['/adminlogin/']);
          });
        console.log(this.adregisterDatas);
      }
    });
  }

  postData() {
    this.auth.postAdRegister(this.adminRegisterForm.value).subscribe((result: any) => {
      alert('Data Register Successfull');
      const data = result;
      this.adminRegisterForm.reset();
      this.router.navigate(['/']);
    });
    console.log(this.adregisterDatas);
  }
}
