import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { CustomerRegistrationService } from './customer-registration.service';
import { PaymentComponent } from './payment/payment.component';
import { BookingComponent } from './booking/booking.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';


@NgModule
(
  {
  declarations: 
  [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    PaymentComponent,
    BookingComponent,
    ViewBookingComponent,
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CustomerRegistrationService],
  bootstrap: [AppComponent]
}
)
export class AppModule { }
