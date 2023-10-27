import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { ProductDilogComponent } from '../product-dilog/product-dilog.component';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss']
})
export class PostComponentComponent implements OnInit {

  constructor( private dialog: MatDialog, )
  {

  }
  ngOnInit(): void {
    this.dialog
      .open(ProductDilogComponent, {
        width: '30%',
      })
      
    
  }

}
