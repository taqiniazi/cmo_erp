import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchEmployeeIInformationComponent } from './search-employee-i-information/search-employee-i-information.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmpTransferStatusComponent } from './emp-transfer-status/emp-transfer-status.component';
import { HajjBallotingComponent } from './hajj-balloting/hajj-balloting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InformationOfReceiptOfIssuedPetrolComponent } from './information-of-receipt-of-issued-petrol/information-of-receipt-of-issued-petrol.component';
import { ProductCategoryComponent } from './product-category/product-category.component';


const routes: Routes = [
  { path: '', component: SearchEmployeeIInformationComponent },
  { path: 'search_employee', component: SearchEmployeeIInformationComponent },
  { path: 'add_employee', component: AddEmployeeComponent },
  { path: 'emp_transfer_status', component: EmpTransferStatusComponent },
  { path: 'hajj-balloting' , component:HajjBallotingComponent  },
  { path: 'icip' , component: InformationOfReceiptOfIssuedPetrolComponent  },
  { path: 'product-catagory' , component: ProductCategoryComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


