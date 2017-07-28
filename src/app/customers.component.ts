import { Component, OnInit } from '@angular/core';

import { Customer } from './customer';
import { CustomersService } from './customers.service';

@Component({
    selector:'customers',
    templateUrl:'./customers.component.html'

})
export class CustomersComponent{
    private customers:Customer[];

    constructor( private customerService:CustomersService){}

    ngOnInit(): void{
        this.customerService.getCustomers()
                            .subscribe(customers=> this.customers=customers);
    }
}