import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  access:boolean=false;
  constructor(private http:HttpClient) { }

  postProductDetails(data :any):Observable<any>
  {
    return this.http.post<any>("http://localhost:3000/productList",data)
  }
  getProductDetails()
  {
    return this.http.get<any>("http://localhost:3000/productList")

  }
  putProductDetails(data:any,id:number)
  {
return this.http.put<any>("http://localhost:3000/productList/"+id,data)
  }
  dleteProduct (id:number):Observable<any>
  {
    return this.http.delete<any>("http://localhost:3000/productList/"+id)

  }
  getProductDetailsById(id:number)
  {
    return this.http.get<any>("http://localhost:3000/productList/"+id)

  }
  postProductDetailsUsers(data :any):Observable<any>
  {
    return this.http.post<any>("http://localhost:3000/users",data)
  }
  getUsertDetails()
  {
    return this.http.get<any>("http://localhost:3000/users")

  }
  deleteUser (id:number):Observable<any>
  {
    return this.http.delete<any>("http://localhost:3000/users/"+id)

  }
  getUserDetailsById(id:number)
  {
    return this.http.get<any>("http://localhost:3000/users/"+id)

  }
  putUserDetails(data:any,id:number)
  {
return this.http.put<any>("http://localhost:3000/users/"+id,data)
  }
  saveUserDetails(data :any)
  {
    return this.http.post<any>("http://localhost:3065/user",data)
  }
  getUserDetailByName(data:any)
  {
    return this.http.post<any>("http://localhost:3065/user/name",data)

  }
  updatePassword(name:string,data:any)
  {
    return this.http.put<any>("http://localhost:3065/user/password/"+name,data)

  }
}
