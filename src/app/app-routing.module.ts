import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchEmployeeIInformationComponent } from './cmo_hris/search-employee-i-information/search-employee-i-information.component';
import { AddEmployeeComponent } from './cmo_hris/add-employee/add-employee.component';
import { EmpTransferStatusComponent } from './cmo_hris/emp-transfer-status/emp-transfer-status.component';
import { HajjBallotingComponent } from './cmo_hris/hajj-balloting/hajj-balloting.component';
import { ProductCategoryComponent } from './cmo_hris/product-category/product-category.component';
import { VehicleDashboard } from './cmo_vehicle/dashboard/dashboard.component';
import { InformationOfReceiptOfIssuedPetrolComponent } from './cmo_vehicle/information-of-receipt-of-issued-petrol/information-of-receipt-of-issued-petrol.component';
import { SearchOfPolAndMroComponent } from './cmo_vehicle/search-of-pol-and-mro/search-of-pol-and-mro.component';
import { InformationOfProductCategoryComponent } from './cmo_vehicle/information-of-product-category/information-of-product-category.component';


const routes: Routes = [
  { path: '', component: SearchEmployeeIInformationComponent },
  { path: 'hris/search_employee', component: SearchEmployeeIInformationComponent },
  { path: 'hris/add_employee', component: AddEmployeeComponent },
  { path: 'hris/emp_transfer_status', component: EmpTransferStatusComponent },
  { path: 'hris/hajj-balloting' , component:HajjBallotingComponent  },
  { path: 'hris/product-catagory' , component: ProductCategoryComponent  },
  { path: 'vehicle/dashboard' , component: VehicleDashboard  },
  { path: 'vehicle/icip' , component: InformationOfReceiptOfIssuedPetrolComponent  },
  { path: 'vehicle/mro_vehicle' , component: SearchOfPolAndMroComponent  },
  { path: 'vehicle/product_cat_info' , component: InformationOfProductCategoryComponent  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


