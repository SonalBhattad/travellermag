import { Component, OnInit } from '@angular/core';

// export function passValidator(control: AbstractControl) {
//   if (control && (control.value !== null || control.value !== undefined)) {
//       const cnfpassValue = control.value;

//       const passControl = control.root.get('password');
//       if (passControl) {
//           const passValue = passControl.value;
//           if (passValue !== cnfpassValue || passValue === '') {
//               return {
//                   isError: true
//               };
//           }
//       }
// }

//   return null;
// }

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  ngOnInit() {
    

  
  }

}