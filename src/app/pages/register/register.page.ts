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
      // "email": "customer004@email.com",
      // "tel": "0000252525"
    }
    var url = 'http://localhost:8008/api/resource/Registration';
    // var myData = JSON.stringify({name: this.myData.name});
    this.http.post(url,postData, options)
      .subscribe(data => {
        this.myData.response = data["_body"];
        this.router.navigateByUrl('/app/tabs/schedule');
      }, error => {
        console.log(error);
      });
  }


}
