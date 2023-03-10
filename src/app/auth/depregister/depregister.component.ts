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
import { AuthService } from '../../shared/auth.service';
import { IdepRegistration } from '../../shared/auth.interface';

@Component({
  selector: 'app-depregister',
  templateUrl: './depregister.component.html',
  styleUrls: ['./depregister.component.scss']
})
export class DepregisterComponent implements OnInit {
  depregisterDatas: IdepRegistration[] = [];
  depRegisterForm: any = FormGroup;
  submitted = false;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.depRegisterForm = this.fb.group({
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
    return this.depRegisterForm.controls;
  }

  registerProcess() {
    this.submitted = true;
    if (this.depRegisterForm.invalid) {
      return;
    }

    this.getRegister();
  }

  getRegister() {
    this.depregisterDatas = this.depRegisterForm.value;
    const inputElement = document.getElementById('email') as HTMLInputElement;
    const inputValue = inputElement.value;

    this.auth.getDepRegister().subscribe((res) => {
      const data = res;

      const final = data.find((data: { _id: number }) => data._id == data._id);
      if (data.length == 0) {
        this.postData();
      } else if (final.email == inputValue) {
        alert('email is already exists');
        this.depRegisterForm.reset();
      } else {
        this.auth
          .postDepRegister(this.depRegisterForm.value)
          .subscribe((result: any) => {
            alert('Data Register Successfull');
            this.depRegisterForm.reset();
            this.router.navigate(['/departmentlogin/']);
          });
        console.log(this.depregisterDatas);
      }
    });
  }

  postData() {
    this.auth.postDepRegister(this.depRegisterForm.value).subscribe((result: any) => {
      alert('Data Register Successfull');
      const data = result;
      this.depRegisterForm.reset();
      this.router.navigate(['/']);
    });
    console.log(this.depregisterDatas);
  }
}
