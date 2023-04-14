import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-transfer-status',
  templateUrl: './emp-transfer-status.component.html',
  styleUrls: ['./emp-transfer-status.component.scss']
})
export class EmpTransferStatusComponent {
  employe_information:any = [
    { 
      emp_code: 1,
      emp_picture: 'assets/img/user_pic.png',
      emp_name: 'Ejaz Ahmed Khan',
      bps_scale:18,
      substantive_post:'Superintendent',
      working_post:'Superintendent',
      office:'Accounts Branch	',
      present_status:'Serving',
      contact_no:'0334-4056586',
      contact_no2:'0334-4564456',
      update:'Update',
      delete:'Delete'
    },
    { 
      emp_code: 2,
      emp_picture: 'assets/img/user_pic.png',
      emp_name: 'Mr. Muzafar',
      bps_scale:'18',
      substantive_post:'Superintendent',
      working_post:'Superintendent',
      office:'Accounts Branch	',
      present_status:'Serving',
      contact_no:'0334-4056586',
      contact_no2:'0334-4564456',
      update:'update',
      delete:'delete'
    },
    { 
      emp_code: 3,
      emp_picture: 'assets/img/user_pic.png',
      emp_name: 'Asif',
      bps_scale:'18',
      substantive_post:'Superintendent',
      working_post:'Superintendent',
      office:'Accounts Branch	',
      present_status:'Serving',
      contact_no:'0334-4056586',
      contact_no2:'0334-4564456',
      update:'update',
      delete:'delete'
    },
    { 
      emp_code: 4,
      emp_picture: 'assets/img/user_pic.png',
      emp_name: 'Taqi',
      bps_scale:'18',
      substantive_post:'Superintendent',
      working_post:'Superintendent',
      office:'Accounts Branch	',
      present_status:'Serving',
      contact_no:'0334-4056586',
      contact_no2:'0334-4564456',
      update:'update',
      delete:'delete'
    }  ,
    { 
      emp_code: 5,
      emp_picture: 'assets/img/user_pic.png',
      emp_name: 'Zohaib',
      bps_scale:'18',
      substantive_post:'Superintendent',
      working_post:'Superintendent',
      office:'Accounts Branch	',
      present_status:'Serving',
      contact_no:'0334-4056586',
      contact_no2:'0334-4564456',
      update:'update',
      delete:'delete'
    }       
  ];
  emp_transfer_status:any = ['Transfered','Depotation','Not Transfered'];
  relationship:any = ['Father','Mother','Son','Daughter','Uncle'];
  constructor() {}
  ngOnInit(){   
  }  
}
