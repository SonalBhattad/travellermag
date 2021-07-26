import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/Services/cart.service';
import { MagazineserviceService } from 'src/Services/magazineservice.service';
import {Observable} from 'rxjs';
import { Magazine } from 'src/Classes/magazine';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  public magazines : any = [];

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getMagazines()
    .subscribe(res=>{
      this.magazines = res;
  })

  }
}
