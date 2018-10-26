export class Order {
    po = new PO();
    production = new Production();
    ps = new PSS();
    packing = new Packing();
    shipmentBooking = new ShipmentBooking();
    preShipmentDocuments = new PreShipmentDocuments();
    postShipmentDocuments = new PostShipmentDocuments();
    AccountsDepartment = new AccountsDepartment();
    incentive = new Incentive();
}

export class PO {
    internalorderdate: Date
    expiryorderdate: Date
    Specialrequired: string
    buyproduce: string

    salesorderno: number
    Shipmentmode: string
    internalorderno: number
    incoterms: string
    customercode: number
    pssrequired: string
    productdetails: any
    gstno: string
    shippingmarks: string
    nameoftransporter: string
    lastdateofdespatch: Date
    shipment: string
    countryofdestination: string
    despatchedfromtarapurto: string
    paletization: string
    productionstatus: string
    rawmaterialavailablity: string
    isfilled: boolean = false;
}
export class Production {
    scheduleproddate: Date
    productionstatus: string
    rawmaterialavailablity: string
    actualproductionDate: Date
    isfilled: boolean = false;
}
export class PSS {
    isfilled: boolean = false;
    PSSdispatchdate: Date
    PSSapproval: string
}
export class Packing {
    packingdate: Date
    packingmaterialavailable: string
    packingstatus: string
    isfilled: boolean = false;
}
export class ShipmentBooking {
    containerbookingdate: Date
    voyage: string
    vesselsailingdate: Date
    vesselname: string
    Vesselcutoffdate: Date
    VesselEta: string
    isfilled: boolean = false;
}
export class PreShipmentDocuments {
    Preshipmentdocuments: string
    Checklist: string
    firstprintofBL: string
    blNo: string
    blDate: Date
    custominvoiceno: string
    customerapprovalonBL: string
    containerno: string
    blDraft: string
    isfilled: boolean = false;
}
export class PostShipmentDocuments {
    isfilled: boolean = false;
    shipmentdocumentreleasedate: Date
    Commercialinvoiceno: string
    postshipmentDocscourierpod: string
    documentsrecivedbycustomer: string
    documentssent:string
    postShipmentdocument: string
    commercialinvoicedate: Date
    PostshipmentDocscourierdate:Date
    actualtimeofarrivalofvessel: Date
}
export class AccountsDepartment {
    isfilled: boolean = false;
}
class Incentive {
    isfilled: boolean = false;
}