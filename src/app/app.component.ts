import { Component,OnInit,ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { UserServicesService } from './services/user-services.service';
import {MatPaginator,} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { Router } from '@angular/router';
import { ProductViewComponent } from './product-view/product-view.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'crud';

  displayedColumns: string[] = ['id', 'name', 'category', 'freshness','price','phoneNumber','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog :MatDialog ,private api :UserServicesService,private router: Router)
  {

  }
  ngOnInit(): void {
    this.getAllProductDetails()
  }
  openDailog()
  {
//this.router.navigate(['/create']);

    this.dialog.open(DialogComponent,{
      width:'30%',
      
    }
    ).afterClosed().subscribe((val)=>{
      
      if(val==='save')
      {
        this.getAllProductDetails()
      }
    }

    )
  }
  getAllProductDetails()
  {
    this.api.getProductDetails().subscribe({
      next:(res)=>{
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort
        
      },
      error:()=>{
         alert('error while loading product details')
      }
    })
  }
  editProductDetails(    event :Event,
    row:any)
  {
    event.stopPropagation();
    this.dialog.open(DialogComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe((val)=>{
      if(val==='update')
      {
        this.getAllProductDetails()
      }
    })
   
  }

  deleteProduct( event :Event,id:number)
  {
    event.stopPropagation();
    this.api.dleteProduct(id).subscribe({
      next:(res)=>{
        alert('product deleted sucessfully')
        this.getAllProductDetails()
      },
      error:()=>{
        alert('unable to delete product')
      }
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewProduct(id:number)
  {

  }
  demo(row:any):void{
    console.log(row)
    this.dialog.open(ProductViewComponent,{
      width:'30%',
      data:row
    })
  
  }
}











  

