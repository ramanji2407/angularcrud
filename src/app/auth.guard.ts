import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginComponent } from './product/login/login.component';
import { UserServicesService } from './services/user-services.service';

export const authGuard: CanActivateFn = (route, state) => {
  const data = localStorage.getItem('userdetails');
  const router=inject(Router)
const loginAcess=inject(UserServicesService) 
console.log(loginAcess.access);

  if (data) {
    return true;
  } 
  else {
    alert('Login please');
router.navigateByUrl('/')
    return false;
  }


};
