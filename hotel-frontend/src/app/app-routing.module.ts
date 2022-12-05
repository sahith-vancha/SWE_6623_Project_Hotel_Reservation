import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';

import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';

const routes: Routes =
[
{ path: '', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{path: 'register', component: RegisterComponent },
{path: 'booking', component: BookingComponent},
{path: 'viewbooking', component: ViewBookingComponent},
{path: 'payment', component:PaymentComponent }

];

@NgModule
(
  {
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}
)
export class AppRoutingModule { }
