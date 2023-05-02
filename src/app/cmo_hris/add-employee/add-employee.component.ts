import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  employe_information:any = [
    { 
      emp_code: 1,
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
  maritalStatus:any = ['Single','Married','Divorced'];
  relationship:any = ['Father','Mother','Son','Daughter','Uncle'];
  constructor() {}
  ngOnInit(){   
  }  

}
