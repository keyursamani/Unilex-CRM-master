import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../core/service/user.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  createUserForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private _bsModalRef: BsModalRef,
    private toastrService: ToastrService,

  ) { }

  ngOnInit() {
    this.initcreateUserForm();
  }

  initcreateUserForm() {
    this.createUserForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}')])],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      role: [null, Validators.required],

    })
  }
  createUser(createUserForm) {
    if (createUserForm.valid) {
      if (createUserForm.value.confirmPassword === createUserForm.value.password) {
        let name = createUserForm.value.firstName + " " +createUserForm.value.lastName;
        this.userService.createUser(createUserForm.value.email, name, createUserForm.value.password, createUserForm.value.role).then(res => {
          if (res.status === 200) {
           
            this.toastrService.success("User is created successfully!");
            window.location.reload();
          }else{
            this.toastrService.error("User is  not created successfully!");
          }
        });
      } else {
        this.toastrService.warning("Check Password and Confirm Password");
      }
    }else{
      this.toastrService.warning("Check all The fields!");
    }

  }
  closeCreatemodel() {
    this._bsModalRef.hide();
  }
}
