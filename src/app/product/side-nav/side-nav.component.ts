import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  name!:any
  constructor( private router: Router,)
  {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.router.navigateByUrl('dashboard/list')
    
  }
  openListComponent()
  {
    
   this.router.navigateByUrl('dashboard/list')
  }
  logOut()
  {
    console.log(localStorage);
    
    localStorage.clear()
    this.router.navigateByUrl('/')
  }
}
