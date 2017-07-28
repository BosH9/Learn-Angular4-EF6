import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { StudentsComponent } from './students/students.component';

const routes : Routes = [
    {
    path: '',
    redirectTo: '/students',
    pathMatch: 'full'
    },
    {
      path: 'customers',
      component: CustomersComponent
    },
    {
      path: 'students',
      component: StudentsComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})
export class AppRoutingModule {}