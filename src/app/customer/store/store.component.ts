import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/Services/cart.service';
import { MagazineserviceService } from 'src/Services/magazineservice.service';
import {Observable} from 'rxjs';
import { Magazine } from 'src/Classes/magazine';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  mags: Observable<Magazine[]>;
  Add= true;
  public Magazines:any[]=[];


  constructor(public service : MagazineserviceService, private cartService : CartService) { }

  ngOnInit(): void {
    this.mags = this.service.getMagazine();
    console.log(this.mags);
    this.Magazines.forEach((a:any) => {
      Object.assign(a,{total:a.price});
    });
  }
  addtocart(mags){
    this.cartService.addtoCart(mags);
  }

}
