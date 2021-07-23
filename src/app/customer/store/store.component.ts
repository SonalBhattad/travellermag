import { Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { Magazine } from '../../magazine';
import { MagazineserviceService } from 'src/app/magazineservice.service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  mags: Observable<Magazine[]>;
  Add= true;
  public Magazines:any[]=[];
  imageSrc = 'assets/Images/winter1.png'

  Images = [    
    {url: 'assets/Images/winter1.png' },
    {url: 'assets/Images/winter2.png'}
  ]

  constructor(public service : MagazineserviceService, private cartService : CartService) { 
    
  }

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
