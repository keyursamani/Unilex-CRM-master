import {Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import { AccountComponent } from './module-components/account/account.component';
import { DashBoardComponent } from './module-components/dash-board/dash-board.component';
import { OrderDetailsComponent } from './module-components/order-details/order-details.component';
import { OrderOverdueComponent } from './module-components/dash-board/order-overdue/order-overdue.component';
import { OrderOver7daysComponent } from './module-components/dash-board/order-over7days/order-over7days.component';
import { TotalOrderValueComponent } from './module-components/dash-board/total-order-value/total-order-value.component';
import { TonnageComponent } from './module-components/dash-board/tonnage/tonnage.component';
import { PaymentDueComponent } from './module-components/dash-board/payment-due/payment-due.component';
import { GSTRefundComponent } from './module-components/dash-board/gstrefund/gstrefund.component';
import { MeisDueComponent } from './module-components/dash-board/meis-due/meis-due.component';
import { DBKDueComponent } from './module-components/dash-board/dbkdue/dbkdue.component';
import { EditOrderDetilsComponent } from './module-components/edit-order-detils/edit-order-detils.component';
import { AuthGuard } from './core/config/auth.guard';
import { EditUserComponent } from './module-components/edit-user/edit-user.component';


const dashBoardChild: Routes = [
  { path: '', component: OrderOverdueComponent },
  { path: 'Orderover-7days', component: OrderOver7daysComponent },
  { path: 'total-order-value', component: TotalOrderValueComponent },
  { path: 'tonnage', component: TonnageComponent },
  { path: 'payment-due', component: PaymentDueComponent },
  { path: 'GST-refund', component: GSTRefundComponent },
  { path: 'DBK-due', component: DBKDueComponent },
  { path: 'Meis-due', component: MeisDueComponent }
];
export const routes: Routes = [
  { path : '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent ,canActivate : [AuthGuard] },
  { path: 'dashboard', component: DashBoardComponent, children: dashBoardChild ,canActivate : [AuthGuard]},
  { path: 'orderdetails', component: OrderDetailsComponent ,canActivate : [AuthGuard]},
  { path: 'create-user/:id', component: EditUserComponent ,canActivate : [AuthGuard] },
  { path: 'edit-orderdetails/:id', component: EditOrderDetilsComponent ,canActivate : [AuthGuard] }
];
