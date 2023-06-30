import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppComponent } from '../app.component';
import { BooksService } from '../services/books.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  allBooks:any = [];
id:any



constructor(
    private router: Router,private Activatedroute: ActivatedRoute,
) { }
ngOnInit(): void {
    let id = this.Activatedroute.snapshot.paramMap.get('id');  
    this.id = id;  
}
  exit(){
    this.router.navigate([
      'Home'
    ])
}
}
