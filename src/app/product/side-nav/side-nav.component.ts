import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  constructor( private router: Router,)
  {

  }
  openListComponent()
  {
    console.log(123);
    
   this.router.navigateByUrl('dashboard/list')
  }

}
