import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/service/user.service';
import { Order } from '../../core/model/order.model';


@Component({
  selector: 'app-edit-order-detils',
  templateUrl: './edit-order-detils.component.html',
  styleUrls: ['./edit-order-detils.component.css']
})
export class EditOrderDetilsComponent implements OnInit {
  poForm: FormGroup;
  productionFom: FormGroup;
  pssFOrm: FormGroup;
  packingFOrm: FormGroup;
  shipmentForm: FormGroup;
  preShiptmentForm: FormGroup;
  PostShipmentDocuments: FormGroup;
  accounDepartfomr: FormGroup;
  incentiveForm: FormGroup;
  originalOreder
  currentOrderId;
  EditPODeaprtmentFlag: boolean;
  PODeaprtmentFlagL: boolean;
  ProductionFlag: boolean;
  EditProductionFlag: boolean;
  PSSDepartmentFlag: boolean;
  PackingDepartmentFlag: boolean;
  ShipmentBookingFlag: boolean;
  PreShipmentDocumentsFlag: boolean;
  PostShipmentDocumentsFlag: boolean;
  AccountsDepartmentFlag: boolean;
  IncentiveDapartmentFlag: boolean;
  EditPSSDepartmentFlag: boolean;
  EditPackingDepartmentFlag: boolean;
  EditShipmentBookingFlag: boolean;
  EditPreShipmentDocumentsFlag: boolean;
  EditPostShipmentDocumentsFlag: boolean;
  EditAccountsDepartmentFlag: boolean;
  EditIncentiveDapartmentFlag: boolean;

  hiddenPODeaprtmentFlag: boolean;
  hiddenProductionFlag: boolean;
  hiddenPSSDepartmentFlag: boolean;
  hiddenPackingDepartmentFlag: boolean;
  hiddenShipmentBookingFlag: boolean;
  hiddenPreShipmentDocumentsFlag: boolean;
  hiddenPostShipmentDocumentsFlag: boolean;
  hiddenAccountsDepartmentFlag: boolean;
  hiddenIncentiveDapartmentFlag: boolean;
  productdetailsList: FormArray;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.hiddenPODeaprtmentFlag = false;
    this.hiddenProductionFlag = false;
    this.hiddenPSSDepartmentFlag = false;
    this.hiddenPackingDepartmentFlag = false;
    this.hiddenShipmentBookingFlag = false;
    this.hiddenPreShipmentDocumentsFlag = false;
    this.hiddenPostShipmentDocumentsFlag = false;
    this.hiddenAccountsDepartmentFlag = false;
    this.hiddenIncentiveDapartmentFlag = false;
    this.EditPSSDepartmentFlag = true;
    this.EditPackingDepartmentFlag = true;
    this.EditShipmentBookingFlag = true;
    this.EditPreShipmentDocumentsFlag = true;
    this.EditPostShipmentDocumentsFlag = true;
    this.EditAccountsDepartmentFlag = true;
    this.EditIncentiveDapartmentFlag = true;
    this.EditPODeaprtmentFlag = true;
    this.EditProductionFlag = true;
    this.PODeaprtmentFlagL = true;
    this.ProductionFlag = true;
    this.PSSDepartmentFlag = true;
    this.PackingDepartmentFlag = true;
    this.ShipmentBookingFlag = true;
    this.PreShipmentDocumentsFlag = true;
    this.PostShipmentDocumentsFlag = true;
    this.AccountsDepartmentFlag = true;
    this.IncentiveDapartmentFlag = true;
    this.originalOreder = new Order();
    this.initPoForm();
    this.initPssForm();
    this.initPackingFOrm();
    this.initShipmentForm();
    this.initpreShiptmentForm();
    this.initpostShiptmentForm();
    this.initaccounDepartfomr();
    this.initincentiveForm();
    this.initproductionFom();
    this.geteditOredr();
    this.setroleaccordinguser()

  }
  initproductionFom() {
    this.productionFom = this.formBuilder.group({
      scheduleproddate: [null, Validators.required],
      productionstatus: [null, Validators.required],
      rawmaterialavailablity: [null, Validators.required],
      actualproductionDate: [null, Validators.required]
    })
  }
  initPoForm() {
    this.poForm = this.formBuilder.group({
      internalorderdate: [null, Validators.required],
      expiryorderdate: [null, Validators.required],
      customercode: [null, Validators.required],
      Specialrequired: [null, Validators.required],
      buyproduce: [null, Validators.required],
      gstno: [null, Validators.required],
      shippingmarks: [null, Validators.required],
      lastdateofdespatch: [null, Validators.required],
      nameoftransporter: [null, Validators.required],
      interOrderNo: [null, Validators.required],
      salesorderno: [Validators.required],
      Shipmentmode: [null, Validators.required],
      incoterms: [Validators.required],
      pssrequired: [Validators.required],
      countryofdestination: [Validators.required],
      despatchedfromtarapurto: [Validators.required],
      paletization: [null, Validators.required],
      productdetails: this.formBuilder.array([this.formBuilder.group({ product: null, qty: null, application: null, currency: null, rate: null, value: null })])
    });
  }
  initPssForm() {
    this.pssFOrm = this.formBuilder.group({
      PSSdispatchdate: [null, Validators.required],
      PSSapproval: [null, Validators.required],
    });
  }
  initPackingFOrm() {
    this.packingFOrm = this.formBuilder.group({
      packingmaterialavailable: [null, Validators.required],
      packingdate: [null, Validators.required],
      packingstatus: [null, Validators.required],

    });
  }
  initShipmentForm() {
    this.shipmentForm = this.formBuilder.group({
      containerbookingdate: [null, Validators.required],
      voyage: [null, Validators.required],
      vesselsailingdate: [null, Validators.required],
      vesselname: [null, Validators.required],
      Vesselcutoffdate: [null, Validators.required],
      VesselEta: [null, Validators.required],

    })
  }
  initpreShiptmentForm() {
    this.preShiptmentForm = this.formBuilder.group({
      Preshipmentdocuments: [null, Validators.required],
      Checklist: [null, Validators.required],
      firstprintofBL: [null, Validators.required],
      blNo: [null, Validators.required],
      blDate: [null, Validators.required],
      custominvoiceno: [null, Validators.required],
      customerapprovalonBL: [Validators.required],
      containerno: [null, Validators.required],
      blDraft: [null, Validators.required]
    });
  }
  initpostShiptmentForm() {
    this.PostShipmentDocuments = this.formBuilder.group({
      shipmentdocumentreleasedate: [null, Validators.required],
      Commercialinvoiceno: [null, Validators.required],
      postshipmentDocscourierpod: [null, Validators.required],
      documentsrecivedbycustomer: [null, Validators.required],
      documentssent: [null, Validators.required],
      postShipmentdocument: [Validators.required],
      commercialinvoicedate: [null, Validators.required],
      PostshipmentDocscourierdate: [null, Validators.required],
      actualtimeofarrivalofvessel: [null, Validators.required]
    })
  }
  initaccounDepartfomr() {
    this.accounDepartfomr = this.formBuilder.group({
      paymentrecived: [null, Validators.required],
      gstRefundRealization: [null, Validators.required],
      rawmaterialRate: [null, Validators.required],
      GSTrefundamount: [null, Validators.required],
      forwardcontractrate: [null, Validators.required]
    })
  }
  initincentiveForm() {
    this.incentiveForm = this.formBuilder.group({
      MEISfilingdate: [null, Validators.required],
      MEISrealization: [null, Validators.required],
      DBKrealization: [null, Validators.required],
      MEISamount: [null, Validators.required],
      DBKamount: [null, Validators.required]
    })
  }
  addPoDetails(poForm) {
    this.productdetailsList = this.poForm.get('productdetails') as FormArray;
    for (var i = 0; i < this.productdetailsList.length; i++) {
      let temp = this.productdetailsList.controls[0].value;
      if (temp.product === null || temp.application === null || temp.currency === null || temp.qty === null || temp.rate === null || temp.value === null) {
        this.toastrService.warning("Some Fileds are missing in product", "Add Order");
        return false
      }
    }
    this.originalOreder.po.internalorderdate = poForm.value.internalorderdate;
    this.originalOreder.po.expiryorderdate = poForm.value.expiryorderdate;
    this.originalOreder.po.Specialrequired = poForm.value.Specialrequired;
    this.originalOreder.po.buyproduce = poForm.value.buyproduce;
    this.originalOreder.po.salesorderno = poForm.value.salesorderno;
    this.originalOreder.po.Shipmentmode = poForm.value.Shipmentmode;
    this.originalOreder.po.internalorderno = poForm.value.interOrderNo;
    this.originalOreder.po.incoterms = poForm.value.incoterms;
    this.originalOreder.po.customercode = poForm.value.customercode;
    this.originalOreder.po.pssrequired = poForm.value.pssrequired;
    this.originalOreder.po.gstno = poForm.value.gstno;
    this.originalOreder.po.shippingmarks = poForm.value.shippingmarks;
    this.originalOreder.po.nameoftransporter = poForm.value.nameoftransporter;
    this.originalOreder.po.lastdateofdespatch = poForm.value.lastdateofdespatch;
    this.originalOreder.po.countryofdestination = poForm.value.countryofdestination;
    this.originalOreder.po.despatchedfromtarapurto = poForm.value.despatchedfromtarapurto;
    this.originalOreder.po.paletization = poForm.value.paletization;

    this.originalOreder.po.isfilled = true;
    this.userService.updateOrderByIdPO(this.currentOrderId, this.originalOreder).then(res => {
      console.log(res);
      this.ngOnInit();
    })
  }
  editPoDetails() {
    this.EditPODeaprtmentFlag = !this.EditPODeaprtmentFlag;
    if (!this.EditPODeaprtmentFlag)
      this.PODeaprtmentFlagL = false
    else
      this.PODeaprtmentFlagL = true

    if (this.PODeaprtmentFlagL) {
      this.ngOnInit();
    }
  }
  editProdutionDetails() {
    this.EditProductionFlag = !this.EditProductionFlag;
    if (!this.EditProductionFlag)
      this.ProductionFlag = false
    else
      this.ProductionFlag = true
    if (this.ProductionFlag) {
      this.ngOnInit();
    }
  }
  editPssDetails() {
    this.EditPSSDepartmentFlag = !this.EditPSSDepartmentFlag;
    if (!this.EditPSSDepartmentFlag)
      this.PSSDepartmentFlag = false
    else
      this.PSSDepartmentFlag = true
    if (this.PSSDepartmentFlag) {
      this.ngOnInit();
    }
  }
  editPackingDetails() {
    this.EditPackingDepartmentFlag = !this.EditPackingDepartmentFlag;
    if (!this.EditPackingDepartmentFlag)
      this.PackingDepartmentFlag = false
    else
      this.PackingDepartmentFlag = true
    if (this.PackingDepartmentFlag) {
      this.ngOnInit();
    }
  }
  editShipmentDetails() {
    this.EditShipmentBookingFlag = !this.EditShipmentBookingFlag;
    if (!this.EditShipmentBookingFlag)
      this.ShipmentBookingFlag = false
    else
      this.ShipmentBookingFlag = true
    if (this.ShipmentBookingFlag) {
      this.ngOnInit();
    }
  }
  editPreShipmentDetails() {
    this.EditPreShipmentDocumentsFlag = !this.EditPreShipmentDocumentsFlag;
    if (!this.EditPreShipmentDocumentsFlag)
      this.PreShipmentDocumentsFlag = false
    else
      this.PreShipmentDocumentsFlag = true
    if (this.PreShipmentDocumentsFlag) {
      this.ngOnInit();
    }
  }
  editPostShipmentDetails() {
    this.EditPostShipmentDocumentsFlag = !this.EditPostShipmentDocumentsFlag;
    if (!this.EditPostShipmentDocumentsFlag)
      this.PostShipmentDocumentsFlag = false
    else
      this.PostShipmentDocumentsFlag = true
    if (this.PostShipmentDocumentsFlag) {
      this.ngOnInit();
    }
  }
  editAccountDetails() {
    this.EditAccountsDepartmentFlag = !this.EditAccountsDepartmentFlag;
    if (!this.EditAccountsDepartmentFlag)
      this.AccountsDepartmentFlag = false
    else
      this.AccountsDepartmentFlag = true
    if (this.AccountsDepartmentFlag) {
      this.ngOnInit();
    }
  }
  editIncentiveDetails() {
    this.EditIncentiveDapartmentFlag = !this.EditIncentiveDapartmentFlag;
    if (!this.EditIncentiveDapartmentFlag)
      this.IncentiveDapartmentFlag = false
    else
      this.IncentiveDapartmentFlag = true
    if (this.IncentiveDapartmentFlag) {
      this.ngOnInit();
    }
  }
  addProductionDetails(productionFom) {
    this.originalOreder.production.scheduleproddate = productionFom.value.scheduleproddate;
    this.originalOreder.production.productionstatus = productionFom.value.productionstatus;
    this.originalOreder.production.rawmaterialavailablity = productionFom.value.rawmaterialavailablity;
    this.originalOreder.production.actualproductionDate = productionFom.value.actualproductionDate;
    this.originalOreder.production.isfilled = true;
    this.userService.updateOrderByIdProduction(this.currentOrderId, this.originalOreder).then(res => {
      if (res.status === 200) {
        console.log(res);

        this.toastrService.success("Production data is  Added");
        this.ngOnInit();
      }
    })

  };
  addPssDetails(pssFOrm) {
    this.originalOreder.ps.PSSdispatchdate = pssFOrm.value.PSSdispatchdate;
    this.originalOreder.ps.PSSapproval = pssFOrm.value.PSSapproval;
    this.originalOreder.ps.isfilled = true;

    this.userService.updateOrderByIdPss(this.currentOrderId, this.originalOreder).then(res => {
      if (res.status === 200) {
        console.log(res);
        this.toastrService.success("Production data is  Added");
        this.ngOnInit();
      }
    })
  }
  addPackingDetails(packingFOrm) {
    this.originalOreder.packing.packingdate = packingFOrm.value.packingdate;
    this.originalOreder.packing.packingstatus = packingFOrm.value.packingstatus;

    this.originalOreder.packing.packingmaterialavailable = packingFOrm.value.packingmaterialavailable;
    this.originalOreder.packing.isfilled = true;

    this.userService.updateOrderByIdPacking(this.currentOrderId, this.originalOreder).then(res => {
      if (res.status === 200) {
        console.log(res);
        this.toastrService.success("Packing Details is  Added");
        this.ngOnInit();
      }
    })

  }
  addshipmentDetails(shipmentForm) {
    this.originalOreder.shipmentBooking.containerbookingdate = shipmentForm.value.containerbookingdate;
    this.originalOreder.shipmentBooking.voyage = shipmentForm.value.voyage;

    this.originalOreder.shipmentBooking.vesselsailingdate = shipmentForm.value.vesselsailingdate;
    this.originalOreder.shipmentBooking.vesselname = shipmentForm.value.vesselname;
    this.originalOreder.shipmentBooking.Vesselcutoffdate = shipmentForm.value.Vesselcutoffdate;
    this.originalOreder.shipmentBooking.VesselEta = shipmentForm.value.VesselEta;
    this.originalOreder.shipmentBooking.isfilled = true;

    this.userService.updateOrderByIdshipment(this.currentOrderId, this.originalOreder).then(res => {
      if (res.status === 200) {
        console.log(res);
        this.toastrService.success("Shipment Details is  Added");
        this.ngOnInit();
      }
    })

  }
  addpreshipmentDetails(preShiptmentForm) {
    this.originalOreder.preShipmentDocuments.Preshipmentdocuments = preShiptmentForm.value.Preshipmentdocuments;
    this.originalOreder.preShipmentDocuments.Checklist = preShiptmentForm.value.Checklist;
    this.originalOreder.preShipmentDocuments.firstprintofBL = preShiptmentForm.value.firstprintofBL;
    this.originalOreder.preShipmentDocuments.blNo = preShiptmentForm.value.blNo;
    this.originalOreder.preShipmentDocuments.blDate = preShiptmentForm.value.blDate;
    this.originalOreder.preShipmentDocuments.custominvoiceno = preShiptmentForm.value.custominvoiceno;
    this.originalOreder.preShipmentDocuments.customerapprovalonBL = preShiptmentForm.value.customerapprovalonBL;
    this.originalOreder.preShipmentDocuments.containerno = preShiptmentForm.value.containerno;
    this.originalOreder.preShipmentDocuments.blDraft = preShiptmentForm.value.blDraft;
    this.originalOreder.preShipmentDocuments.isfilled = true;
    this.userService.updateOrderByIdpreshipment(this.currentOrderId, this.originalOreder).then(res => {
      if (res.status === 200) {
        console.log(res);
        this.toastrService.success("Pre-Shipment Details is  Added");
        this.ngOnInit();
      }
    })

  }
  addpostshipmentDetails(PostShipmentDocuments) {
    this.originalOreder.postShipmentDocuments.shipmentdocumentreleasedate = PostShipmentDocuments.value.shipmentdocumentreleasedate;
    this.originalOreder.postShipmentDocuments.Commercialinvoiceno = PostShipmentDocuments.value.Commercialinvoiceno;
    this.originalOreder.postShipmentDocuments.postshipmentDocscourierpod = PostShipmentDocuments.value.postshipmentDocscourierpod;
    this.originalOreder.postShipmentDocuments.documentsrecivedbycustomer = PostShipmentDocuments.value.documentsrecivedbycustomer;
    this.originalOreder.postShipmentDocuments.documentssent = PostShipmentDocuments.value.documentssent;
    this.originalOreder.postShipmentDocuments.postShipmentdocument = PostShipmentDocuments.value.postShipmentdocument;
    this.originalOreder.postShipmentDocuments.commercialinvoicedate = PostShipmentDocuments.value.commercialinvoicedate;
    this.originalOreder.postShipmentDocuments.actualtimeofarrivalofvessel = PostShipmentDocuments.value.actualtimeofarrivalofvessel;
    this.originalOreder.postShipmentDocuments.actualtimeofarrivalofvessel = PostShipmentDocuments.value.actualtimeofarrivalofvessel;
    this.originalOreder.postShipmentDocuments.isfilled = true;
    this.userService.updateOrderByIdpostshipment(this.currentOrderId, this.originalOreder).then(res => {
      if (res.status === 200) {
        console.log(res);
        this.toastrService.success("Post-Shipment Details is  Added");
        this.ngOnInit();
      }
    })

  }
  addaddountDetails(accounDepartfomr) {
    this.originalOreder.AccountsDepartment.paymentrecived = accounDepartfomr.value.paymentrecived;
    this.originalOreder.AccountsDepartment.gstRefundRealization = accounDepartfomr.value.gstRefundRealization;
    this.originalOreder.AccountsDepartment.rawmaterialRate = accounDepartfomr.value.rawmaterialRate;
    this.originalOreder.AccountsDepartment.GSTrefundamount = accounDepartfomr.value.GSTrefundamount;
    this.originalOreder.AccountsDepartment.forwardcontractrat = accounDepartfomr.value.forwardcontractrat;
    this.originalOreder.AccountsDepartment.isfilled = true;
    this.userService.updateOrderByIdposaccount(this.currentOrderId, this.originalOreder).then(res => {
      if (res.status === 200) {
        console.log(res);
        this.toastrService.success("Account Details is  Added");
        this.ngOnInit();
      }
    })

  }
  addincentiveDetails(incentiveForm) {
    this.originalOreder.incentive.MEISfilingdate = incentiveForm.value.MEISfilingdate;
    this.originalOreder.incentive.MEISrealization = incentiveForm.value.MEISrealization;
    this.originalOreder.incentive.DBKrealization = incentiveForm.value.DBKrealization;
    this.originalOreder.incentive.MEISamount = incentiveForm.value.MEISamount;
    this.originalOreder.incentive.DBKamount = incentiveForm.value.DBKamount;
    this.originalOreder.incentive.isfilled = true;
    this.userService.updateOrderByIdincentive(this.currentOrderId, this.originalOreder).then(res => {
      if (res.status === 200) {
        console.log(res);
        this.toastrService.success("Account Details is  Added");
        this.ngOnInit();
      }
    })
  }
  geteditOredr() {
    this.activatedRoute.params.subscribe(params => {
      this.currentOrderId = params['id'];
      if (params['id']) {
        this.userService.getOrderById(params['id'])
          .then((res) => {
            if (res.status === 200) {
              this.originalOreder = res.data["result"][0];
              this.setPoDetails();
              this.setProductionDetails();
              this.setPssDetails();
              this.setPackingDetails();
              this.setshipmentDetails();
              this.setpreshipmentDetails();
              this.setpostshipmentDetails();
              this.setaddountDetails();
              this.setincentiveDetails();
            } else {

            }
          });
      }
    })
  }
  setPoDetails() {
    this.poForm.patchValue({
      internalorderdate: new Date(this.originalOreder.po.internalorderdate),
      expiryorderdate: new Date(this.originalOreder.po.expiryorderdate),
      customercode: this.originalOreder.po.customercode,
      Specialrequired: this.originalOreder.po.Specialrequired,
      buyproduce: this.originalOreder.po.buyproduce,
      gstno: this.originalOreder.po.gstno,
      shippingmarks: this.originalOreder.po.gstno,
      lastdateofdespatch: this.originalOreder.po.lastdateofdespatch,
      nameoftransporter: this.originalOreder.po.nameoftransporter,
      interOrderNo: this.originalOreder.po.internalorderno,
      salesorderno: this.originalOreder.po.salesorderno,
      Shipmentmode: this.originalOreder.po.shipment,
      incoterms: this.originalOreder.po.incoterms,
      pssrequired: this.originalOreder.po.pssrequired,
      countryofdestination: this.originalOreder.po.countryofdestination,
      despatchedfromtarapurto: this.originalOreder.po.despatchedfromtarapurto,
      paletization: this.originalOreder.po.paletization,
      productdetails: this.originalOreder.po.productdetails
    });

    console.log(this.originalOreder)
  }
  setProductionDetails() {
    this.productionFom.patchValue({
      scheduleproddate: new Date(this.originalOreder.production.scheduleproddate),
      productionstatus: this.originalOreder.production.productionstatus,
      rawmaterialavailablity: this.originalOreder.production.rawmaterialavailablity,
      actualproductionDate: new Date(this.originalOreder.production.actualproductionDate)
    })
  };
  setPssDetails() {
    this.pssFOrm.patchValue({
      PSSdispatchdate: new Date(this.originalOreder.ps.PSSdispatchdate),
      PSSapproval: this.originalOreder.ps.PSSapproval
    });
  }
  setPackingDetails() {
    this.packingFOrm.patchValue({
      packingmaterialavailable: this.originalOreder.packing.packingmaterialavailable,
      packingdate: new Date(this.originalOreder.packing.packingdate),
      packingstatus: this.originalOreder.packing.packingstatus,
    });
  }
  setshipmentDetails() {
    this.shipmentForm.patchValue({
      containerbookingdate: new Date(this.originalOreder.shipmentBooking.containerbookingdate),
      voyage: this.originalOreder.shipmentBooking.voyage,
      vesselsailingdate: new Date(this.originalOreder.shipmentBooking.vesselsailingdate),
      vesselname: this.originalOreder.shipmentBooking.vesselname,
      Vesselcutoffdate: new Date(this.originalOreder.shipmentBooking.Vesselcutoffdate),
      VesselEta: this.originalOreder.shipmentBooking.VesselEta,
    })
  }
  setpreshipmentDetails() {
    this.preShiptmentForm.patchValue({
      Preshipmentdocuments: this.originalOreder.preShipmentDocuments.Preshipmentdocuments,
      Checklist: this.originalOreder.preShipmentDocuments.Checklist,
      firstprintofBL: this.originalOreder.preShipmentDocuments.firstprintofBL,
      blNo: this.originalOreder.preShipmentDocuments.blNo,
      blDate: new Date(this.originalOreder.preShipmentDocuments.blDate),
      custominvoiceno: this.originalOreder.preShipmentDocuments.custominvoiceno,
      customerapprovalonBL: this.originalOreder.preShipmentDocuments.customerapprovalonBL,
      containerno: this.originalOreder.preShipmentDocuments.containerno,
      blDraft: this.originalOreder.preShipmentDocuments.blDraft
    });
  }
  setpostshipmentDetails() {
    this.PostShipmentDocuments.patchValue({
      shipmentdocumentreleasedate: new Date(this.originalOreder.postShipmentDocuments.shipmentdocumentreleasedate),
      Commercialinvoiceno: this.originalOreder.postShipmentDocuments.Commercialinvoiceno,
      postshipmentDocscourierpod: this.originalOreder.postShipmentDocuments.postshipmentDocscourierpod,
      documentsrecivedbycustomer: this.originalOreder.postShipmentDocuments.documentsrecivedbycustomer,
      documentssent: this.originalOreder.postShipmentDocuments.documentssent,
      postShipmentdocument: this.originalOreder.postShipmentDocuments.postShipmentdocument,
      commercialinvoicedate: new Date(this.originalOreder.postShipmentDocuments.commercialinvoicedate),
      PostshipmentDocscourierdate: new Date(this.originalOreder.postShipmentDocuments.PostshipmentDocscourierdate),
      actualtimeofarrivalofvessel: new Date(this.originalOreder.postShipmentDocuments.actualtimeofarrivalofvessel)
    })
  }
  setaddountDetails() {
    this.accounDepartfomr.patchValue({
      paymentrecived: this.originalOreder.AccountsDepartment.paymentrecived,
      gstRefundRealization: this.originalOreder.AccountsDepartment.gstRefundRealization,
      rawmaterialRate: this.originalOreder.AccountsDepartment.rawmaterialRate,
      GSTrefundamount: this.originalOreder.AccountsDepartment.GSTrefundamount,
      forwardcontractrate: this.originalOreder.AccountsDepartment.forwardcontractrate
    })
  }
  setincentiveDetails() {
    this.incentiveForm.patchValue({
      MEISfilingdate: new Date(this.originalOreder.incentive.MEISfilingdate),
      MEISrealization: this.originalOreder.incentive.MEISrealization,
      DBKrealization: this.originalOreder.incentive.DBKrealization,
      MEISamount: this.originalOreder.incentive.MEISamount,
      DBKamount: this.originalOreder.incentive.DBKamount
    })
  }
  addPosition(): void {
    this.productdetailsList = this.poForm.get('productdetails') as FormArray;
    this.productdetailsList.push(this.formBuilder.group({ product: null, qty: null, application: null, currency: null, rate: null, value: null }));
  }
  deletePosition(index) {
    if (index > 0) {
      this.productdetailsList = this.poForm.get('productdetails') as FormArray;
      this.productdetailsList.removeAt(index);
    }
  }
  setroleaccordinguser(){
    if(window.localStorage.getItem("UnilEX_CRM_USER_ROLE")==="logistic"){
      this.hiddenPODeaprtmentFlag=true;
      this.hiddenPSSDepartmentFlag=true;
      this.hiddenShipmentBookingFlag=true;
      this.hiddenPreShipmentDocumentsFlag=true;
      this.hiddenPostShipmentDocumentsFlag=true;
      this.hiddenIncentiveDapartmentFlag=true;
    }else if(window.localStorage.getItem("UnilEX_CRM_USER_ROLE")==="factory"){
      this.hiddenProductionFlag=true;
      this.hiddenPackingDepartmentFlag=true;
    }else if(window.localStorage.getItem("UnilEX_CRM_USER_ROLE")==="account") {
      this.hiddenAccountsDepartmentFlag=true
    }
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
