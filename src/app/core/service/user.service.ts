import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { API, and, or, cond } from 'space-api';
import { promise } from 'protractor';
import { v4 } from 'uuid';
declare var fs: any;
var api = new API('unilex', "http://104.196.139.138:8080");
var db = api.Mongo();

@Injectable()
export class UserService {
    constructor(
        private router: Router
    ) { }
    getloginservice(name): Promise<any> {
        return db.signIn(name.email, name.password).then(res => {
            if (res.status === 200) {
                api.setToken(res.data.token)
                window.localStorage.setItem("UnilEX_CRM_Key", res.data.token);
            } else if (res.status === 401) {
                this.router.navigate(['/login']);
            }
            return res;
        });
    }
    setAPiToken(data) {
        api.setToken(data)
    }
    addloginservice(name): Promise<any> {
        return db.signIn(name.email, name.password).then(res => {
            if (res.status === 200) {

            } else if (res.status === 401) {
                this.router.navigate(['/login']);
            }
            return res;
        });
    }
    addOrder(doc): Promise<any> {
        doc._id = v4();
        return db.insert('orders').one(doc).then(res => {
            if (res.status === 200) {

            } else if (res.status === 401) {
                this.router.navigate(['/login']);
            }
            return res;
        });
    }
    getOrderList(): Promise<any> {
        return db.get('orders').where().all().then(res => {
            if (res.status === 200) {

            } else if (res.status === 401) {
                this.router.navigate(['/login']);
            }
            return res;
        });
    }
    getOrderById(id): Promise<any> {
        return db.get('orders').where(cond('_id', '==', id)).all().then(res => {
            if (res.status === 200) {

            } else if (res.status === 401) {
                this.router.navigate(['/login']);
            }
            return res;
        });
    }
    updateOrderByIdPO(id, data): Promise<any> {
        return db.update('orders').where(cond('_id', '==', id)).set({ po: data.po }).all().then(res => {
            if (res.status === 200) {

            } else if (res.status === 401) {
                this.router.navigate(['/login']);
            }
            return res;
        });
    }
    updateOrderByIdProduction(id, data): Promise<any> {
        return db.update('orders').where(cond('_id', '==', id)).set({ production: data.production }).all().then(res => {
            if (res.status === 200) {

            } else if (res.status === 401) {
                this.router.navigate(['/login']);
            }
            return res;
        });
    }
    updateOrderByIdPss(id, data): Promise<any> {
        return db.update('orders').where(cond('_id', '==', id)).set({ ps: data.ps }).all().then(res => {
            if (res.status === 200) {

            } else if (res.status === 401) {
                this.router.navigate(['/login']);
            }
            return res;
        });
    }
    updateOrderByIdPacking(id, data): Promise<any> {
        return db.update('orders').where(cond('_id', '==', id)).set({ packing: data.packing }).all().then(res => {
            if (res.status === 200) {

            } else if (res.status === 401) {
                this.router.navigate(['/login']);
            }
            return res;
        });
    }
    updateOrderByIdshipment(id, data): Promise<any> {
        return db.update('orders').where(cond('_id', '==', id)).set({ shipmentBooking: data.shipmentBooking }).all().then(res => {
            if (res.status === 200) {

            } else if (res.status === 401) {
                this.router.navigate(['/login']);
            }
            return res;
        });
    }
    updateOrderByIdpreshipment(id, data): Promise<any> {
        return db.update('orders').where(cond('_id', '==', id)).set({ preShipmentDocuments: data.preShipmentDocuments }).all().then(res => {
            if (res.status === 200) {

            } else if (res.status === 401) {
                this.router.navigate(['/login']);
            }
            return res;
        });
    }
    updateOrderByIdpostshipment(id, data): Promise<any> {
        return db.update('orders').where(cond('_id', '==', id)).set({ postShipmentDocuments: data.postShipmentDocuments }).all().then(res => {
            if (res.status === 200) {

            } else if (res.status === 401) {
                this.router.navigate(['/login']);
            }
            return res;
        });
    }
    updateOrderByIdincentive(id, data): Promise<any> {
        return db.update('orders').where(cond('_id', '==', id)).set({ incentive: data.incentive }).all().then(res => {
            if (res.status === 200) {

            } else if (res.status === 401) {
                this.router.navigate(['/login']);
            }
            return res;
        });
    }
    updateOrderByIdposaccount(id, data): Promise<any> {
        return db.update('orders').where(cond('_id', '==', id)).set({ AccountsDepartment: data.AccountsDepartment }).all().then(res => {
            if (res.status === 200) {

            } else if (res.status === 401) {
                this.router.navigate(['/login']);
            }
            return res;
        });
    }
    createUser(email,name,password,role): Promise<any> {
        return db.signUp(email, name, password, role);
    }
    getUserListService(): Promise<any> {
        return db.profiles();
    }
    deleteUser(id): Promise<any> {
        return db.delete("users").where(cond('_id', '==', id)).one();
    }
    editUser(id,email,name,pass): Promise<any> {
      return  db.editProfile(id, email, name, pass).one();
    }
    edituserRole(id,role):Promise<any>{
        return db.update("users").where(cond('_id', '==', id)).set({role:role});
    }
    getuserById(id):Promise<any>{
        return db.profile(id);
    }

}
