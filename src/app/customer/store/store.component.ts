import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart.service';
import { Magzine } from 'src/app/magzine';
import { MagzineServiceService } from 'src/app/magzine-service.service'

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
  

  constructor(public service : MagzineServiceService, public cartService : CartService) { 
    
  }

  ngOnInit(): void {
   this.mags = this.service.getMagzine();
    console.log(this.mags);
    this.Magazines.forEach((a:any) => {
      Object.assign(a,{total:a.price});
    });
  }

  addtocart(mag){
    this.cartService.addtoCart(mag);
  }
  


}
