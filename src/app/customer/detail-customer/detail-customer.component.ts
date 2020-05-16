import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { DatailCustomerService } from './datail-customer.service';
import { AddOrEditCustomer } from '../models/AddOrEditCustomer';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  id: number;
}

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.scss'],
  providers: [DatailCustomerService]
})
export class DetailCustomerComponent implements OnInit {
  customer: AddOrEditCustomer = new AddOrEditCustomer();

  constructor(private service: DatailCustomerService,
    public dialogRef: MatDialogRef<DetailCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private ref: ChangeDetectorRef) {

    this.customerRetrieved(data.id);

  }

  ngOnInit() {
  }

  customerRetrieved(id: number): void {

    this.service.getCustomerById(id)
      .subscribe(response => {
        this.customer = response;
        this.ref.markForCheck();
      });
  }
}
