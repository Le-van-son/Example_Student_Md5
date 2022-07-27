import { Component, OnInit } from '@angular/core';
import {ToursService} from "../../service/tours.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {HttpClient} from "@angular/common/http";
const API_URL = 'http://localhost:3000/tuors'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  tours: any;

  constructor(private toursService: ToursService, private activatedRouter: ActivatedRoute, private httClient: HttpClient) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((param: ParamMap) => {
      this.httClient.get(API_URL  + '/' + param.get('id')).subscribe((data) => {
        this.tours = data
      })
    })
  }

}
