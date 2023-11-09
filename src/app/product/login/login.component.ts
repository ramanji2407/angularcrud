import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginForm!: FormGroup;

  access:boolean=false
  

  constructor(private router: Router ,private api:UserServicesService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  openDashboard() {
    console.log(this.loginForm.value);

    this.api.getUserDetailByName(this.loginForm.value).subscribe({
      next:(response)=>{
        this.api.access=true
      alert('userfound')
      this.router.navigateByUrl('/dashboard/list');
     // console.log(response);
     localStorage.setItem('userdetails',JSON.stringify(this.loginForm.value))

     
        //console.log(userdetails)
      },
      error:(res)=>{
        console.log(res);
        
       // console.log(res.error.message[0]);
        // const response:string=res.error.message[0]
        alert('User credentials wrong');
        this.router.navigateByUrl('/login')


        
      }
    })
   // this.router.navigateByUrl('/dashboard/list');
  }


  changePassword()
  {
    
  }
}
