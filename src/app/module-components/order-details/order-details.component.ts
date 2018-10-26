import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AddOrderComponent } from '../add-order/add-order.component';
import { UserService } from '../../core/service/user.service';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private modalService: BsModalService, private userService: UserService) { }
  bsModalRef: BsModalRef;
  orderList: any;
  ngOnInit() {
    this.getoder();
  }
  getoder() {
    this.userService.getOrderList().then(res => {
      if (res.status === 200) {
        this.orderList = res.data.result;
      }
    })
  }
  addOredr() {
    this.bsModalRef = this.modalService.show(AddOrderComponent);
  }
}
