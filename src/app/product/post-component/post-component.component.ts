import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';
import { ViewUsersComponent } from '../view-users/view-users.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss'],
})
export class PostComponentComponent implements OnInit {
  nameForm!: FormGroup;
  adresssForm!: FormGroup;
  @ViewChild('stepper') myStepper!: MatStepper;

  id!: number;
  editData: any;
  buttonName: string = 'Submit';

  constructor(
    private userService: UserServicesService,
    private router: Router,
    private view: ViewUsersComponent,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((val) => {
      console.log(this.id);

      this.id = val['id'];
      console.log(this.id);
    });
  }
  ngOnInit(): void {
   this.createForm()
  }

  getFormDetail() {
    console.log(this.adresssForm.value);
    console.log(this.nameForm.value);
    if (!this.id ) {
      this.userService.postUserDetails(this.nameForm.value).subscribe({
        next: (response) => {
          alert('sucessfully added users');

          this.router.navigateByUrl('/dashboard/users');
          this.view.getAllUsers();

          // this.myStepper.reset();
        },
        error: () => {
          alert('error while adding user details');
        },
      });
    } else {
      this.updateUser();
    }
  }

  updateUser() {

    this.userService.putUserDetails(this.nameForm.value,this.editData.id).subscribe({
      next: (res) => {
        alert('updated product details sucessfully');
       
        this.view.getAllUsers()
        this.router.navigateByUrl('/dashboard/users');

        //this.dialogRef.close('update')
      },
      error: () => {
        alert('error while uploading details');
      },
    });
  }

  setValue() {
    this.nameForm.controls['firstName'].setValue(this.editData.firstName);
    this.nameForm.controls['lastName'].setValue(this.editData.lastName);
  }

  createForm()
  {
    this.nameForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
    });
    // this.adresssForm = new FormGroup({
    //   adress: new FormControl('', [Validators.required]),
    //   state: new FormControl('', [Validators.required]),
    // });

    if (this.id) {
      this.buttonName = 'update';
      this.userService.getUserDetailsById(this.id).subscribe({
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
    }
  }
}
