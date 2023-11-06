import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  constructor(private router:Router)
  {

  }
  login()
  {
this.router.navigateByUrl('/login')
  }
  signUp()
  {
    this.router.navigateByUrl('/signup')  }
   }
