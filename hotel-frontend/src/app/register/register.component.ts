import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerRegistrationService } from '../customer-registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  customer: Customer=new Customer("","","",0,0);
  message:any;
  constructor(private service:CustomerRegistrationService) { }

  ngOnInit(): void {
  }

  public registerNow(){
    let resp=this.service.doRegistration(this.customer);
    resp.subscribe((data)=>this.message=data);
  }
}
