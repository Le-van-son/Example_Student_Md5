import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ToursService} from "../../service/tours.service";
import {ActivatedRoute, Router} from "@angular/router";

class Tour {
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editForm : FormGroup = new FormGroup({
      title: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
    }
  )

  id : any;
  tour : Tour | any;

  constructor(private tourService : ToursService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(parammap => {
      this.id = parammap.get('id');
      this.tourService.findById(this.id).subscribe(data => {
          this.editForm.patchValue({
            title: data.title,
            price: data.price,
            description: data.description
          })
        },
        error => {
          console.log(error);
        });
    });
  }

  editTour() {
    this.tour = {
      title: this.editForm.value.title,
      price: this.editForm.value.price,
      description: this.editForm.value.description
    }
    this.tourService.editTour(this.id, this.tour).subscribe(() => {
      this.router.navigateByUrl("/")
      alert("Successful !!")
    }, error => {
      console.log(error)
    })
  }

}
