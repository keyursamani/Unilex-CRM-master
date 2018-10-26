import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../../core/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private userService: UserService,
    private toastrService: ToastrService
  ) {
  }

  ngOnInit() {
    const authToken = window.localStorage.getItem('UnilEX_CRM_Key');
        if (authToken != null) {
          this.router.navigate(['/account']);
            return true;
        }
    this.initLoginForm();
  }
  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  clickMe(loginForm) {
    if (!loginForm.valid) {
      Object.keys(loginForm.controls).forEach(field => {
        const control = loginForm.get(field);
        control.markAsTouched({ onlySelf: true });
      })
    } else {
      this.userService.getloginservice(loginForm.value).then(res => {
        if (res.status === 200) {
          window.localStorage.setItem("UnilEX_CRM_USER_ROLE", res.data.user.role);
          
          this.toastrService.success("Login IS successfully", "Login");
          this.router.navigate(['/account']);
        } else {
          this.toastrService.warning("Login IS Not successfully", "Login");
        }
      })
    }

  }
}
