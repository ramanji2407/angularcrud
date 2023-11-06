import { Component ,inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  id!:number
  userData!:any
  userService=inject(UserServicesService)
//private userService:UserServicesService

  constructor(private activatedRoute:ActivatedRoute)
  {
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.activatedRoute.params.subscribe( (parameters)=>{
      console.log(parameters);
      this.id=parameters['id']
      

    });

    this.userService.getUserDetailsById(this.id).subscribe({
      next:(response)=>{
        this.userData=response
        //console.log(response);
        
      },
      error:()=>{
        alert('unable to get user detail of id'+this.id)
      }

    })
    
  }
}
