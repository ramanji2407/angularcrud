import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { Router } from '@angular/router';
import { UserServicesService } from '../services/user-services.service';
import { DialogComponent } from '../dialog/dialog.component';
import { ProductViewComponent } from '../product-view/product-view.component';
import { ProductDilogComponent } from './product-dilog/product-dilog.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  title = 'crud';
  //value:boolean=false
  value: boolean = false;
  displayedColumns: string[] = [
    'id',
    'name',
    'category',
    'freshness',
    'price',
    'phoneNumber',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private dialog: MatDialog,
    private api: UserServicesService,
    private router: Router,
    private activatedRoute:ActivatedRoute
  ) {

    this.activatedRoute.params.subscribe((val)=>{
      console.log(val);
      
    })
  }
  ngOnInit(): void {
    this.getAllProductDetails();
    
      
   
  }
  openDailog() {
    //this.value=true
    this.router.navigateByUrl('/create');
    this.dialog
        .open(ProductDilogComponent, {
          width: '30%',
        })
        .afterClosed()
        .subscribe((val) => {
          if (val === 'save') {
            this.router.navigateByUrl('/');
          } else {
            this.router.navigateByUrl('/');
          }
        });
  }

  getAllProductDetails() {
    this.api.getProductDetails().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {
        alert('error while loading product details');
      },
    });
  }
  editProductDetails(event: Event, row: any) {
    event.stopPropagation();
    this.router.navigateByUrl('/update/'+row.id);

    this.dialog
      .open(ProductDilogComponent, {
        width: '30%',
        data: row,
      })
      .afterClosed()
        .subscribe((val) => {
          if (val === 'save') {
            this.router.navigateByUrl('/');
          } else {
            this.router.navigateByUrl('/');
          }
        });
  }

  deleteProduct(event: Event, id: number) {
    event.stopPropagation();
    this.router.navigateByUrl('/delete/'+id);

    this.api.dleteProduct(id).subscribe({
      next: (res) => {
        alert('product deleted sucessfully');
        this.router.navigateByUrl('/');
      },
      error: () => {
        alert('unable to delete product');
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  demo(row: any): void {
    console.log(row);
    this.router.navigateByUrl('/product/'+row.id);

    this.dialog.open(ProductViewComponent, {
      width: '30%',
      data: row,
    }).afterClosed()
    .subscribe((val) => {
      if (val === 'save') {
        this.router.navigateByUrl('/');
      } else {
        this.router.navigateByUrl('/');
      }
    });
  }
}
