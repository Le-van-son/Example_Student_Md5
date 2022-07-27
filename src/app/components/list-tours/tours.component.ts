import { Component, OnInit } from '@angular/core';
import {ToursService} from "../../service/tours.service";
import {Tours} from "../../model/tours";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

  id: any;
  tours : Tours [] = [];
  constructor(private toursService: ToursService, private router: Router) { }

  ngOnInit(): void {
    this.getAllTours()
  }
  getAllTours(){
    this.toursService.getAll().subscribe(result => {
      this.tours  = result;
    }, error => {
      alert(error)
    })
  }
  deleteTours(id: any) {
    console.log(id)
    if (confirm("are you sure?")){
      this.toursService.delete(id).subscribe(() => {
        alert(" Complete!! ?")
        this.getAllTours()
      }, error => {
        console.log(error)
      })
    }
  }

}
