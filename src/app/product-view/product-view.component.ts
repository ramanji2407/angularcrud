import { Component ,Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent  implements OnInit{
productDetails:any
  constructor(@Inject(MAT_DIALOG_DATA) public editData:any)
  {

  }
  ngOnInit(): void {
    this.productDetails=this.editData;
  }

  
  



}
