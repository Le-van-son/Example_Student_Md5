import { Component, OnInit } from '@angular/core';
import {Tours} from "../../model/tours";
import {ToursService} from "../../service/tours.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  addForm: FormGroup = new FormGroup({
    tittle: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  })

  constructor(private toursService: ToursService, private router: Router) {
  }

  ngOnInit(): void {
  }

  createTours() {
    const tours : Tours = {
      title: this.addForm.value.tittle,
      price: this.addForm.value.price,
      description: this.addForm.value.description
    }
    console.log(tours)
    this.toursService.save(tours).subscribe((data)=> {
      alert("Successful !")
      this.router.navigate(['/'])
    })
  }

}
