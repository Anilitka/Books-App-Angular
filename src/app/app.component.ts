import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { BooksService } from './services/books.service';
import { Router, ParamMap,  ActivatedRoute } from '@angular/router';
import { concatWith } from 'rxjs';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  allBooks:any = [];
  constructor(private _modal: NgbModal, private _bService: BooksService,private _route: Router) 
  {}

ngOnInit(): void {
    this.getBookList();
}

open(){
const refr = this._modal.open(ModalComponent);

}
refreshPage() {
  window.location.reload();  
}


 getBookList(){
  this._bService.getBookList().subscribe({
    next: (res) => {
      this.allBooks = res;
    },
    error: console.log
  })
 }

 deleteBook(id:number){
  this._bService.deleteBook(id).subscribe({
    next:(res) => {
      alert("Book deleted successfully");
      this.getBookList();
    }
  })
 }

 filterTxt:any = '';

}
