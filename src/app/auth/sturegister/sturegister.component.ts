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
import { AuthService } from '../../shared/services/auth.service';
import { IstuRegistration } from '../../shared/interfaces/auth.interface';

@Component({
  selector: 'app-sturegister',
  templateUrl: './sturegister.component.html',
  styleUrls: ['./sturegister.component.scss']
})
export class SturegisterComponent implements OnInit {
  sturegisterDatas: IstuRegistration[] = [];
  stuRegisterForm: any = FormGroup;
  submitted = false;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.stuRegisterForm = this.fb.group({
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
    return this.stuRegisterForm.controls;
  }

  registerProcess() {
    this.submitted = true;
    if (this.stuRegisterForm.invalid) {
      return;
    }

    this.getRegister();
  }

  getRegister() {
    this.sturegisterDatas = this.stuRegisterForm.value;
    const inputElement = document.getElementById('email') as HTMLInputElement;
    const inputValue = inputElement.value;

    this.auth.getStuRegister().subscribe((res) => {
      const data = res;

      const final = data.find((data: { _id: number }) => data._id == data._id);
      if (data.length == 0) {
        this.postData();
      } else if (final.email == inputValue) {
        alert('email is already exists');
        this.stuRegisterForm.reset();
      } else {
        this.auth
          .postStuRegister(this.stuRegisterForm.value)
          .subscribe((result: any) => {
            alert('Data Register Successfull');
            this.stuRegisterForm.reset();
            this.router.navigate(['/studentlogin/']);
          });
        console.log(this.sturegisterDatas);
      }
    });
  }

  postData() {
    this.auth.postStuRegister(this.stuRegisterForm.value).subscribe((result: any) => {
      alert('Data Register Successfull');
      const data = result;
      this.stuRegisterForm.reset();
      this.router.navigate(['/']);
    });
    console.log(this.sturegisterDatas);
  }
}
