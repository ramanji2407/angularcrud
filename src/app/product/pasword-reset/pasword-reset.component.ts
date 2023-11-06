import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-pasword-reset',
  templateUrl: './pasword-reset.component.html',
  styleUrls: ['./pasword-reset.component.scss']
})
export class PaswordResetComponent {

  passwordrResetForm!: FormGroup;
  constructor(private router: Router ,private api:UserServicesService) {}



  ngOnInit(): void {
    this.passwordrResetForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  updatePassword()
  {
    console.log(this.passwordrResetForm.get('userName')?.value);
    
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
