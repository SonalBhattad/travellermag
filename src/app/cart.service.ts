import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public Magazines = new BehaviorSubject<any>([]);

  constructor() { }
  getMagazines(){
    return this.Magazines.asObservable();
  }

  setMagazine(product : any){
    this.cartItemList.push(...product);
    this.Magazines.next(product);
  }

  addtoCart(product : any){
    this.cartItemList.push(product);
    this.Magazines.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.magprice;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.magid=== a.magid){
        this.cartItemList.splice(index,1);
      }
    })
    this.Magazines.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.Magazines.next(this.cartItemList);
  }
}