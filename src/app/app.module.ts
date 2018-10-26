import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { routes } from './routes';
import { AccountComponent } from './module-components/account/account.component';
import { OrderDetailsComponent } from './module-components/order-details/order-details.component';
import { DashBoardComponent } from './module-components/dash-board/dash-board.component';
import { HeaderComponent } from './common-component/header/header.component';
import { SubHeaderComponent } from './common-component/sub-header/sub-header.component';
import { OrderOverdueComponent } from './module-components/dash-board/order-overdue/order-overdue.component';
import { OrderOver7daysComponent } from './module-components/dash-board/order-over7days/order-over7days.component';
import { TotalOrderValueComponent } from './module-components/dash-board/total-order-value/total-order-value.component';
import { TonnageComponent } from './module-components/dash-board/tonnage/tonnage.component';
import { GSTRefundComponent } from './module-components/dash-board/gstrefund/gstrefund.component';
import { MeisDueComponent } from './module-components/dash-board/meis-due/meis-due.component';
import { DBKDueComponent } from './module-components/dash-board/dbkdue/dbkdue.component';
import { PaymentDueComponent } from './module-components/dash-board/payment-due/payment-due.component';
import { EditOrderDetilsComponent } from './module-components/edit-order-detils/edit-order-detils.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { AddOrderComponent } from './module-components/add-order/add-order.component';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,  HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from '../app/core/config/auth.guard';
import { InterceptorService } from '../app/core/config/interceptor.service';
import { UserService } from './core/service/user.service';
import {ToastrModule} from 'ngx-toastr';
import { CreateUserComponent } from './module-components/create-user/create-user.component';
import { EditUserComponent } from './module-components/edit-user/edit-user.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    OrderDetailsComponent,
    DashBoardComponent,
    HeaderComponent,
    SubHeaderComponent,
    OrderOverdueComponent,
    OrderOver7daysComponent,
    TotalOrderValueComponent,
    TonnageComponent,
    GSTRefundComponent,
    MeisDueComponent,
    DBKDueComponent,
    PaymentDueComponent,
    EditOrderDetilsComponent,
    AddOrderComponent,
    CreateUserComponent,
    EditUserComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddOrderComponent,
    CreateUserComponent
  ]
})
export class AppModule { }
