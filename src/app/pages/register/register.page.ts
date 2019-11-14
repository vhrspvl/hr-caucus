import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  myData: any = {};

  constructor(public http: HttpClient, public router: Router) {
    this.myData.fullname = '';
    this.myData.company='';
    this.myData.designation='';
    this.myData.phone='';
    this.myData.email='';
    this.myData.nationality='';
    
    this.myData.response = ''
    this.http = http;
  }

  onRegister() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {
      headers: headers
    }

    let postData = {
      "name1": this.myData.fullname,
      "company": this.myData.company,
      "designation": this.myData.designation,
      "phone": this.myData.phone,
      "email": this.myData.email,
      "nationality": this.myData.nationality,

      // "email": "customer004@email.com",
      // "tel": "0000252525"
    }
    var url = 'http://erp.voltechgroup.com/api/resource/HR Caucus Registration';
    var myData = JSON.stringify({
      // name: this.myData.name
      "full_name": this.myData.fullname,
      "company": this.myData.company,
      "designation": this.myData.designation,
      "phone": this.myData.phone,
      "email": this.myData.email,
      "nationality": this.myData.nationality,

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
