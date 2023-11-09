import { Component ,Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UserServicesService } from '../../../services/user-services.service';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent  implements OnInit{
  productDetails!: product;
  id!:number;


  constructor(//@Inject(MAT_DIALOG_DATA) public editData:any,
  private api:UserServicesService,
  private activatedRoute:ActivatedRoute)
  {

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(val =>{
      console.log(val)
      this.id=val['id']
    
    })
    this.api.getProductDetailsById(this.id).subscribe({
      next:(result)=>{
        console.log(result);
        this.productDetails=result;
     
       
        
        
      },
      error:()=>{
        alert("error while getting details of"+this.id)
      }
    })
  }

  
  



}
export interface product {
  name: string
  category: string
  freshness: string
  price: number
  comment: string
  date: string
  phoneNumber: string[]
  id: number
}
