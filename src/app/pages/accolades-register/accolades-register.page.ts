import { Component} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'accolades-register',
  templateUrl: './accolades-register.page.html',
  styleUrls: ['./accolades-register.page.scss'],
})
export class AccoladesRegisterPage{
  myData: any = {};

  constructor(public http: HttpClient, public router: Router) { 
  this.myData.name = '';
  this.myData.company = '';
  this.myData.title = '';
  this.myData.address = '';
  this.myData.email = '';
  this.myData.phone = '';
  this.myData.alternate_contact = '';
  this.myData.alternate_email = '';
  this.myData.alternate_phone = '';
  this.myData.head_of_hr_name_and_title = '';
  this.myData.head_of_hr_email_and_phone = '';
  this.myData.company_employees = '';
  this.myData.hr_dept_employees = '';
  this.myData.company_industry = '';
  this.myData.type_of_entity = '';
  this.myData.nature_of_ownership = '';
  this.myData.date_of_incorporation = '';

  this.myData.response = ''
  this.http = http;
  }
  ngOnInit() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    let options = {
      headers: headers
    }
    let postData = {
      "name": this.myData.name,
      "company": this.myData.company,
      "title": this.myData.title,
      "address": this.myData.address,
      "email": this.myData.email,
      "phone#": this.myData.phone,
      "alternate contact": this.myData.alternate_contact,
      "alternate email": this.myData.alternate_email,
      "alternate phone": this.myData.alternate_phone,
      "head of hr (name & title)": this.myData.head_of_hr_name_and_title,
      "head of hr (email & phone)": this.myData.head_of_hr_email_and_phone,
      "company employees": this.myData.company_employees,
      "hr dept.employees": this.myData.hr_dept_employees,
      "company industry": this.myData.company_industry,
      "type of entity": this.myData.type_of_entity,
      "nature of ownership": this.myData.nature_of_ownership,
      "date of incorporation(dd-mm-yyyy)": this.myData.date_of_incorporation,
      // "email": "customer004@email.com",
      // "tel": "0000252525"
    }
    var url = 'http://erp.voltechgroup.com/api/resource/HR Caucus Registration';
    var myData = JSON.stringify({
      // name: this.myData.name
      "name": this.myData.name,
      "company": this.myData.company,
      "title": this.myData.title,
      "address": this.myData.address,
      "email": this.myData.email,
      "phone": this.myData.phone,
      "alternate_contact": this.myData.alternate_contact,
      "alternate_email": this.myData.alternate_email,
      "alternate_phone": this.myData.alternate_phone,
      "head_of_hr_name_and_title": this.myData.head_of_hr_name_and_title,
      "head_of_hr_email_and_phone": this.myData.head_of_hr_email_and_phone,
      "company_employees": this.myData.company_employees,
      "hr_dept_employees": this.myData.hr_dept_employees,
      "company_industry": this.myData.company_industry,
      "type_of_entity": this.myData.type_of_entity,
      "nature_of_ownership": this.myData.nature_of_ownership,
      "date_of_incorporation": this.myData.date_of_incorporation,

    });
    this.http.post(url,myData, options)
      .subscribe(data => {
        this.myData.response = data["_body"];
        this.router.navigateByUrl('/app/tabs/schedule');
      }, error => {
        console.log(error);
      });
  }


}
