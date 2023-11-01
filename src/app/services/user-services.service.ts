import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

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
}
