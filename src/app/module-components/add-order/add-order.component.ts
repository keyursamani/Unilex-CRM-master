import { Component, OnInit } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from '../../core/service/user.service';
import { Order } from '../../core/model/order.model';


@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  orderForm: FormGroup;
  productdetailsList: FormArray;
  order;
  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private _bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.initInterviewForm();

  }
  initInterviewForm() {
    this.orderForm = this.formBuilder.group({
      gstno: [null, Validators.required],
      shippingmarks: [null, Validators.required],
      lastdateofdespatch: [null, Validators.required],
      nameoftransporter: [null, Validators.required],
      interOrderNo: [null, Validators.required],
      countryofdestination: [Validators.required],
      despatchedfromtarapurto: [Validators.required],
      paletization: [null, Validators.required],
      internalorderdate: [null, Validators.required],
      expiryorderdate: [null, Validators.required],
      Specialrequired: ["yes", Validators.required],
      buyproduce: ["buy", Validators.required],
      salesorderno: [Validators.required],
      Shipmentmode: ["seeways", Validators.required],
      incoterms: [null, Validators.required],
      customercode: [Validators.required],
      pssrequired: ["yes", Validators.required],
      productdetails: this.formBuilder.array([this.formBuilder.group({ product: null, qty: null, application: null, currency: null, rate: null, value: null })])
    });
  }
  addPosition(): void {
    this.productdetailsList = this.orderForm.get('productdetails') as FormArray;
    this.productdetailsList.push(this.formBuilder.group({ product: null, qty: null, application: null, currency: null, rate: null, value: null }));
  }
  deletePosition(index) {
    if (index > 0) {
      this.productdetailsList = this.orderForm.get('productdetails') as FormArray;
      this.productdetailsList.removeAt(index);
    }
  }
  addOrder(orderForm) {
    if (!orderForm.valid) {
      Object.keys(orderForm.controls).forEach(field => {
        const control = orderForm.get(field);
        control.markAsTouched({ onlySelf: true });
      })
    } else {
      this.productdetailsList = this.orderForm.get('productdetails') as FormArray;
      for (var i = 0; i < this.productdetailsList.length; i++) {
        let temp = this.productdetailsList.controls[0].value;
        if (temp.product === null || temp.application === null || temp.currency === null || temp.qty === null || temp.rate === null || temp.value === null) {
          this.toastrService.warning("Some Fileds are missing in product", "Add Order");
          return false
        }

      }
      this.order = new Order();

      this.order.po.gstno = orderForm.value.gstno;
      this.order.po.shippingmarks = orderForm.value.shippingmarks;
      this.order.po.nameoftransporter = orderForm.value.nameoftransporter;
      this.order.po.lastdateofdespatch = orderForm.value.lastdateofdespatch;
      this.order.po.countryofdestination = orderForm.value.countryofdestination;
      this.order.po.despatchedfromtarapurto = orderForm.value.despatchedfromtarapurto;
      this.order.po.paletization = orderForm.value.paletization;
      this.order.po.internalorderdate = orderForm.value.internalorderdate;
      this.order.po.expiryorderdate = orderForm.value.expiryorderdate;
      this.order.po.Specialrequired = orderForm.value.Specialrequired;
      this.order.po.buyproduce = orderForm.value.buyproduce;
      this.order.po.salesorderno = orderForm.value.salesorderno;
      this.order.po.Shipmentmode = orderForm.value.Shipmentmode;
      this.order.po.incoterms = orderForm.value.incoterms;
      this.order.po.customercode = orderForm.value.customercode;
      this.order.po.pssrequired = orderForm.value.pssrequired;
      this.order.po.productdetails = orderForm.value.productdetails;
      this.order.po.isfilled = true;
      this.userService.addOrder(this.order).then(
        (res) => {
          console.log(res);
        }
      )
    }
  }
  closemodel() {
    this._bsModalRef.hide();
  }
}
export class products {
  product: string
  qty: number
  application: string
  currency: string
  rate: number
  value: number
}


