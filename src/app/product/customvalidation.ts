import { AbstractControl, ValidatorFn } from "@angular/forms";



export function passwordMatchValidator( control: AbstractControl): { [key: string]: boolean } | null {
  console.log(control);
//     //console.log(control.get('reenterPassword')?.value);
    
 console.log(control.value);

    // const password = control.get('password');
    // const reenterPassword = control.get('reenterPassword');
  
    if (control.value.password!==control.value.reenterPassword) {
      return { 'passwordMatchValidator': true };
    } else {
      return null;
    }
  }
//   password?.value !== reenterPassword?.value

// export function passwordMatchValidator(password:string, reenterPassword:string):ValidatorFn {
  
    
//     return  (control: AbstractControl): { [key: string]: boolean } | null => {
        
        
//         if (control.get('password')?.value === control.get('reenterPassword')?.value) {
//             return null ;
//         }
//         return  { 'passwordMatchValidator': true };
//     };
// }