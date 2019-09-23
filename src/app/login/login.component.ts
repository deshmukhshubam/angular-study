import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

loginform: FormGroup;
baseurl: string = "https://reqres.in/api/login";
data: {};
result: any;
loggedUserToken: any;

  constructor(private http: HttpClient) { }

  
 

  ngOnInit() {
    this.loginform= new FormGroup({
      username: new FormControl('', Validators.compose([Validators.required, 
                                    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      password: new FormControl('', Validators.compose([Validators.required]))
    }); 
    
  }

   
   
  get username() { return this.loginform.get('username'); }
  get password() { return this.loginform.get('password'); }

  
   

   Login(dt){

    this.data= {"email": dt.username, "password": dt.password};

    this.result =  this.http.post(this.baseurl, this.data);
    this.result.subscribe((res : any[])=>{
    this.loggedUserToken = res;
      window.localStorage.setItem("token", JSON.stringify(this.loggedUserToken.token));
      this.decode();
  })
   
    
   }

   getDecodedAccessToken(token: string): any {
    try{
      console.log(token);
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }


   decode(){
    let tokenInfo = this.getDecodedAccessToken(JSON.stringify(this.loggedUserToken.token)); // decode token
    //let expireDate = tokenInfo.exp; // get token expiration dateTime
    console.log(tokenInfo); // show decoded token object in console
   }

}
