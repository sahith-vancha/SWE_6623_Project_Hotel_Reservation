import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  booking: Booking=new Booking(0,new Date,new Date,0,"","",0);
  message:any;
  constructor(private service:BookingService) { }

  ngOnInit(): void {
  }

  public bookNow(){
    let resp=this.service.doBooking(this.booking);
    resp.subscribe((data)=>this.message=data);
  }
}
