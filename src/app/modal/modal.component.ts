import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { BooksService } from '../services/books.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],

})
export class ModalComponent  {
bookForm: FormGroup;

constructor(
   private _nb: FormBuilder,
   private _bService: BooksService,
   private _modal : NgbModal
   ){
  this.bookForm = this._nb.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    year: ['', Validators.required]
  })
}


onFormSubmit(){
  if(this.bookForm.valid){
    this._bService.addBook(this.bookForm.value).subscribe({
      next: (val:any) =>
     {
      alert('Book added successfully');
      this._modal.dismissAll();
     } ,
  error: (err:any) => {
     console.error(err)
  }  
})
  }
}
}

