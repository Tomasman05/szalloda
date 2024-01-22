import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: any[] = [];
  tableHeaders = ["Azonosító", "Érkezés", "Távozás", "Vendég neve", "Szoba száma"];

  constructor(private baseService: BaseService) { }

  ngOnInit(): void {
    this.baseService.getBooks().subscribe(
      (data: any) => {
        if (data !== "error") {
          this.books = data;
        } else {
          console.error("Error fetching data");
        }
      }
    );
  }
}

