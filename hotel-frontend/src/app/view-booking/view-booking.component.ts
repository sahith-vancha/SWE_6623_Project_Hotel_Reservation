import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';


@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  booking:any;
  customerId:any;
  message:any
  constructor(private service:BookingService) { }


public deleteBooking(id:number){
 let resp= this.service.deleteBooking(id);
 resp.subscribe((data)=>this.message=data);
}

public findBookingByCustomerId(){
  let resp= this.service.getBookingByCustomerId(this.customerId);
  resp.subscribe((data)=>this.booking=data);
 }

  ngOnInit() {
  
  }

}