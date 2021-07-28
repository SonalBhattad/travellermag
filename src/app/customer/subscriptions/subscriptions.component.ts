import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/Services/cart.service';
import { MagazineserviceService } from 'src/Services/magazineservice.service';
import {Observable} from 'rxjs';
import { Magazine } from 'src/Classes/magazine';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css'],
  providers: [DatePipe]
})
export class SubscriptionsComponent implements OnInit {

  public magazines : any = [];
  date: Date;

  constructor(private cartService : CartService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.cartService.getMagazines()
    .subscribe(res=>{
      this.magazines = res;
  })

  this.date=new Date();
  let newDate = this.date.setFullYear(this.date.getFullYear() + 1);
  }
 

}
