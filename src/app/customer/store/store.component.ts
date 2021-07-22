import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { MagzineserviceService } from 'src/app/magzineservice.service';
import {Observable} from 'rxjs';
import { Magzine } from 'src/app/magzine';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  mags: Observable<Magzine[]>;
  Add= true;
  public Magazines:any;
  imageSrc = 'assets/Images/winter1.png'

  Images = [    
    {url: 'assets/Images/winter1.png' },
    {url: 'assets/Images/winter2.png'}
  ]


  constructor(public service : MagzineserviceService, private cartService : CartService) { }

  ngOnInit(): void {
    this.mags = this.service.getMagzine();
    console.log(this.mags);
    this.Magazines.forEach((a:any) => {
      Object.assign(a,{total:a.price});
    });
  }
  addtocart(mags){
    this.cartService.addtoCart(mags);
  }

}
