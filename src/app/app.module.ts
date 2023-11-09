import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import{ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProductViewComponent } from './product/components/product-view/product-view.component';
import { RouterModule } from '@angular/router';
import { CommonInterceptor } from './common.interceptor';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    ProductViewComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    HttpClientModule,
    MatTableModule,MatPaginatorModule,
    MatSortModule,
    RouterModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:CommonInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
