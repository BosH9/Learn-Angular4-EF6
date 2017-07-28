import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { CustomersComponent } from './customers.component';
import { CustomersService } from './customers.service';
import { VendorsComponent } from './vendors/vendors.component';
import { StudentsComponent } from './students/students.component';
import { StudentsService } from './students/students.service';


@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
 ],
  declarations: [ 
    AppComponent,
    CustomersComponent,
    VendorsComponent,
    StudentsComponent
  ],
  providers:  [CustomersService, StudentsService],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
