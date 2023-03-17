import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IadRegistration, IdepRegistration } from 'src/app/shared/interfaces/auth.interface';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-managelogs',
  templateUrl: './managelogs.component.html',
  styleUrls: ['./managelogs.component.scss'],
})
export class ManagelogsComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  activeIndex: number = 0;
  loading: boolean = true;
  adregisterDatas: IadRegistration[] = [];
  adminRegisterForm: any = FormGroup;
  depregisterDatas: IdepRegistration[] = [];
  depRegisterForm: any = FormGroup;
  submitted = false;
  ngOnInit(): void {
    this.auth.getAdRegister().subscribe((res) => {
      this.adregisterDatas = res;
      this.loading = false;
    });
    this.auth.getDepRegister().subscribe((res) => {
      this.depregisterDatas = res;
      this.loading = false;
    });
  }
  getAdRegister() {
    this.auth.getAdRegister().subscribe((res) => {
      return res;
    });
  }
  getDepRegister() {
    this.auth.getAdRegister().subscribe((res) => {
      return res;
    });
  }
}
