import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';
//import { passwordMatchValidator } from '../customvalidation';
import { passwordMatchValidator } from '../customvalidation';

@Component({
  selector: 'app-pasword-reset',
  templateUrl: './pasword-reset.component.html',
  styleUrls: ['./pasword-reset.component.scss']
})
export class PaswordResetComponent {

  passwordrResetForm!: FormGroup;
  constructor(private router: Router ,private api:UserServicesService) {}

passwordMatch:string='Password is required'

//enterdPassword:string=this.passwordrResetForm.get('reenterPassword')?.value



  ngOnInit(): void {
    this.passwordrResetForm = new FormGroup({
      userName: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('', [Validators.required,Validators.minLength(5)]),
      reenterPassword: new FormControl<string>('', [Validators.required,Validators.minLength(5)])},
      { validators: [passwordMatchValidator]}  
      // [passwordMatchValidator("password","reenterPassword")]
    );
  }
  // passwordMatchValidato(control: AbstractControl): { [key: string]: boolean }
  // {
  //   passwordMatchValidator()
  //   return { 'passwordMatchValidator': true };
  // }
  updatePassword()
  {
    console.log(this.passwordrResetForm.get('userName')?.value);
    if(this.passwordrResetForm.get('password')?.value!==this.passwordrResetForm.get('reenterPassword')?.value)
    {
      alert('unable to updated password because password should match')
      this.passwordrResetForm.reset();
    }
    else{

      this.api.updatePassword(this.passwordrResetForm.get('userName')?.value,this.passwordrResetForm.value).subscribe({
        next:(response)=>{
          
          alert('sucesfully updated password')
          this.router.navigateByUrl('/login')
        },
        error:()=>{
          alert('unable to updated password')
  
        }
      })
      
    }
   
  }

}

// function passwordMatchValidator(): import("@angular/forms").ValidatorFn {
//   throw new Error('Function not implemented.');
// }
// export function passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
//   const password = control.get('password');
//   const reenterPassword = control.get('reenterPassword');

//   if (password?.value !== reenterPassword?.value) {
//     return { 'passwordMatchValidator': true };
//   } else {
//     return null;
//   }
// }

