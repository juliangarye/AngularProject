import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AuthGuard } from '../auth/auth.guard';
import { Role } from '../auth/role.enum';

const customerRouters: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CustomerListComponent
      }
    ],
    canActivate : [AuthGuard],
    data: {expectedRole: Role.Admin}
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(customerRouters)
  ],
  exports:[RouterModule],
  declarations: []
})
export class CustomerRoutingModule { }
