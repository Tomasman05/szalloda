import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url="https://localhost:7156/api/Bookings/"
  private bookSub=new Subject()

  constructor(private http:HttpClient) {
    this.downloadBooks();
   }
  
  getBooks(){
    return this.bookSub
  }

  downloadBooks(){
    this.http.get(this.url).subscribe(
      {
      next:(res)=>this.bookSub.next(res),
      error:(res)=>this.bookSub.next("error")
    } )
  }

  addNewBook(body:any){
    this.http.post(this.url,body).forEach(
      ()=>this.downloadBooks()
    )
  }

  deleteBook(body:any){
    this.http.delete(this.url+body.id).forEach(
      ()=>this.downloadBooks()
    )
  }

  putBook(body:any){
    this.http.put(this.url+body.id, body).forEach(
      ()=>this.downloadBooks()
    )
  }


}
