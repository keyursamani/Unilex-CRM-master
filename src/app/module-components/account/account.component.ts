import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CreateUserComponent } from '../create-user/create-user.component';
import { UserService } from '../../core/service/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  bsModalRef: BsModalRef;
  userlist: any;
  constructor(
    private modalService: BsModalService,
    private userService: UserService,
    private toastrService: ToastrService

  ) { }

  ngOnInit() {
    this.getUserList()
  }
  adduser() {
    this.bsModalRef = this.modalService.show(CreateUserComponent);
  }
  getUserList() {
    this.userService.getUserListService().then(res => {
      if (res.status === 200) {
        this.userlist = [];
        this.userlist = res.data["users"];
      }
    })
  }
  deleteuser(id) {
    var result = confirm("Do you really want to delete?");
    if (result) {
      this.userService.deleteUser(id)
        .then((res) => {
          if (res.status === 200) {
            this.toastrService.success("user is deleted!")
            this.getUserList();
          }
        });
    }
  }
  edituser(id) {

  }
}
