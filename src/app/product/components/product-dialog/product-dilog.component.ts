import { Component, Inject, OnInit, Optional, inject } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../../product.component';

@Component({
  selector: 'app-product-dilog',
  templateUrl: './product-dilog.component.html',
  styleUrls: ['./product-dilog.component.scss'],
})
export class ProductDilogComponent {
  productForm!: FormGroup;
  butoonName: string = 'save';
  formName: string = 'Add Product Form';
  productFreshness: string[] = ['BrandNew', 'SecondHand', 'Refurbished'];
  id!: number 
  editData: any;

  constructor(
    private api: UserServicesService,
    //@Inject(MAT_DIALOG_DATA) public editData:any,
    private product: ProductComponent,
    @Optional() private dialogRef: MatDialogRef<ProductDilogComponent>,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.activatedRouter.params.subscribe((val) => {
      console.log(this.id);

      this.id = val['id'];
      console.log(this.id);
    });
  }
  ngOnInit(): void {

  this.createForm()
    
  }
  keyCheck(event: KeyboardEvent) {
    console.log(event.key);

    if (event.key === 'e' || event.key === 'E') {
      event.preventDefault();
    }
  }
  get formDetails() {
    return (this.productForm.get('phoneNumber') as FormArray).controls;
  }

  setValue() {
    console.log(this.editData);

    this.productForm.controls['name'].setValue(this.editData.name),
      this.productForm.controls['freshness'].setValue(this.editData.freshness),
      this.productForm.controls['category'].setValue(this.editData.category),
      this.productForm.controls['price'].setValue(this.editData.price),
      this.productForm.controls['comment'].setValue(this.editData.comment),
      this.productForm.controls['date'].setValue(this.editData.date);
    if (Array.isArray(this.editData.phoneNumber)) {
      const phoneFormArray = this.productForm.controls[
        'phoneNumber'
      ] as FormArray;
      phoneFormArray.clear();
      for (let i = 0; i < this.editData.phoneNumber.length; i++) {
        phoneFormArray.push(new FormControl(this.editData.phoneNumber[i]));
      }
    }
  }

  pushNewPhoneNumber() {
    (this.productForm.get('phoneNumber') as FormArray)?.push(
      new FormControl('', [
        Validators.required,
        // Validators.maxLength(10),
        // Validators.minLength(10),
      ])
    );
  }
  deletePhoneNumber(i: number) {
    (this.productForm.get('phoneNumber') as FormArray)?.removeAt(i);
  }

  checkLength(): boolean {
    return (this.productForm.get('phoneNumber') as FormArray).length === 1;
  }
  postProductDetails() {
    if (!this.id) {
      if (this.productForm.valid) {
        console.log(this.productForm.value);

        this.api.postProductDetails(this.productForm.value).subscribe({
          next: (res) => {
            alert('product details sucessfully added');
            this.productForm.reset();
            this.product.getAllProductDetails();
            this.router.navigateByUrl('/dashboard/list');

           // this.dialogRef.close('save');
          },
          error: () => {
            alert('Error while adding product details');
          },
        });
      }
    } else {
      this.updateDeatails();
    }
  }

  updateDeatails() {
    this.api
      .putProductDetails(this.productForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert('updated product details sucessfully');
          this.productForm.reset();
          this.product.getAllProductDetails();
          this.router.navigateByUrl('/dashboard/list');

          //this.dialogRef.close('update')
        },
        error: () => {
          alert('error while uploading details');
        },
      });
  }


  createForm()
  {
    this.productForm = new UntypedFormGroup({
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      freshness: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      phoneNumber: new FormArray([new FormControl('', [Validators.required])]),
    });
    if (this.id) {
      this.butoonName = 'update';
      this.formName = 'Update Form';
      // console.log(this.editData);
      this.api.getProductDetailsById(this.id).subscribe({
        next: (result) => {
          ///console.log(result);
          this.editData = result;
          console.log(this.editData);
          this.setValue();
        },
        error: () => {
          alert('error while getting details of' + this.id);
        },
      });

      //this.productForm.controls['phoneNumber'].setValue(this.editData.phoneNumber);
    }
  }
}
