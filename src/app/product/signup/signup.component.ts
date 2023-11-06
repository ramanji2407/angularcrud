import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm!: FormGroup;
  constructor(private router: Router ,private api:UserServicesService) {}



  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  register()
  {

    this.api.saveUserDetails(this.signupForm.value).subscribe({
      next:(response)=>{
       

        this.router.navigateByUrl('/')
        alert('saved userdetails')
      },
      error:(res)=>{
        alert('User name already exist ')
        
        console.log(res);
        
        // console.log(res.error.message[0]);
        //  const response:string=res.error.message[0]
        //  alert(response);
        // this.router.navigateByUrl('/login')


        
      }
    })

  }
  // updatePassword()
  // {
  //   console.log(this.signupForm.get('userName')?.value);
    
  //   this.api.updatePassword(this.signupForm.get('userName')?.value,this.signupForm.value).subscribe({
  //     next:(response)=>{
        
  //       alert('sucesfully updated password')
  //     },
  //     error:()=>{
  //       alert('unable to updated password')

  //     }
  //   })
  // }
}
