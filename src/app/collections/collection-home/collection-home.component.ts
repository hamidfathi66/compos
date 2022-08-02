import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})

export class CollectionHomeComponent implements OnInit {
  //pathCompanies ='companies';
  
  data = [
    { name: 'ali', age: 24, job: 'designer', employed: true },
    { name: 'reza', age: 29, job: 'engineer', employed: true },
    { name: 'sara', age: 15, job: 'ui', employed: false }
  ];

  headers = [
    { key: 'name', value: 'Name', show: true },
    { key: 'age', value: 'Age', show: true },
    { key: 'job', value: 'Job', show: true },
    { key: 'employed', value: 'Employed', show: true }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}