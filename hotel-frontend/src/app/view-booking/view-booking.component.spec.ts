import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ViewBookingComponent } from './view-booking.component';
import { FormsModule } from '@angular/forms';

describe('ViewBookingComponent', () => {
  let component: ViewBookingComponent;
  let fixture: ComponentFixture<ViewBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: 
      [
         ViewBookingComponent
         ],
      imports:
      [
        HttpClientModule,
      FormsModule
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
