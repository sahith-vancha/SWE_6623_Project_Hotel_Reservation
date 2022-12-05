import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from './booking';

@Injectable(
  {
  providedIn: 'root'
}
)
export class BookingService {
  getBookingByCustomerId(customerId: number) {
    return this.http.get
    ("http://localhost:8080/findBooking/"+customerId);
  }
  deleteBooking(id: number) {
    return this.http.delete
    ("http://localhost:8080/delete/"+id,
    {responseType:'text' as 'json'});
  }

  public doBooking(booking: Booking) {
    return this.http.post
    ("http://localhost:8080/booking",
    booking,{responseType:'text' as 'json'});
  }
 

  constructor(private http:HttpClient) { }
}
