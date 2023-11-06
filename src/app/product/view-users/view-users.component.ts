import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Router } from '@angular/router';
export interface Users{
  id:number;
  firstName:string;
  lastName:string;
}
@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss'],
})

export class ViewUsersComponent {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'action'];
  dataSource!: MatTableDataSource<Users>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api: UserServicesService, private router: Router) {}
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.api.getUsertDetails().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {
        alert('unable to get user details');
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


  addProduct() {
    this.router.navigateByUrl('/dashboard/users/create');
  }


  editUserDetails(event: Event, row: Users) {
    event.stopPropagation();

    this.router.navigateByUrl('/dashboard/users/update/' + row.id);
  }

  deleteProduct(event: Event, id: number) {
    event.stopPropagation();
    this.api.deleteUser(id).subscribe({
      next: (rse) => {
        alert('Sucesfully deleted user');
        this.getAllUsers();
      },
      error: () => {
        alert('unable to delete user');
      },
    });
   
  }
  getUserDetail(row: any) {
    this.router.navigateByUrl('/dashboard/user/' + row.id);
  }
}
