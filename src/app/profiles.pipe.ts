import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'profiles'
})
export class ProfilesPipe implements PipeTransform {

  transform(value:any):any{
    console.log("In Gender Pipe transform method!!");

    switch(value){
      case 1:return "Customer";
      case 2:return "Employee";
      case 3:return "Artist";
    }
  }

}
