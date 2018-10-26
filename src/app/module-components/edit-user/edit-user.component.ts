import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../core/service/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  createUserForm: FormGroup;
  currentUserId;
  constructor(
    private _bsModalRef: BsModalRef,
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,

  ) { }


  ngOnInit() {
    this.initcreateUserForm();
    this.getdetilas();
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
  getdetilas() {
    this.activatedRoute.params.subscribe(params => {
      this.currentUserId = params['id'];
      if (params['id']) {
        this.userService.getuserById(this.currentUserId).then(res => {
          let data = res.data.users;
          var name = data.name.split(" ");
          this.createUserForm.patchValue({
            firstName: name[0],
            lastName: name[1],
            email: data.email,
            role: data.role
          });
        })
      }
    })
  }

  createUser(createUserForm) {
    if (createUserForm.valid) {
      if (createUserForm.value.confirmPassword === createUserForm.value.password) {
        let name = createUserForm.value.firstName + " " + createUserForm.value.lastName;
        this.updateRole(createUserForm.value.role);
        this.userService.editUser(this.currentUserId, createUserForm.value.email, name, createUserForm.value.password).then(res => {
          if (res.status === 200) {

            this.toastrService.success("User is Updated successfully!");
            this.router.navigate(['/account']);
          } else {
            this.toastrService.error("User is   Updated successfully!");
          }
        });
      } else {
        this.toastrService.warning("Check Password and Confirm Password");
      }
    } else {
      this.toastrService.warning("Check all The fields!");
    }
  }
  closeCreatemodel() {
    this._bsModalRef.hide();
  }
  updateRole(role) {
    this.userService.edituserRole(this.currentUserId, role).then(
      res => {

      }
    )

  }

}
