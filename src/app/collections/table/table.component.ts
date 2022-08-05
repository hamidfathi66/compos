import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit, OnChanges {
  @Input() data: any[] = [];
  //@Input() data: { name: string, age: number, job: string, employed: boolean };
  @Input() headers: any[] = [];
  @Input() className = "basic";
  // @Input() name : string ='';
  
  // addNewData() {
  //   this.data.push({ name: 'new data', age: 24, job: 'designer', employed: true });
  // }

  constructor() {
    //console.log(this.data);
  }
  
  ngAfterContentChecked() {
    //console.log(this.data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(changes);
    console.log(this.data);
  }

  ngOnInit(): void {
    //console.log('ngOnInit');
    //console.log(this.data);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngDoCheck(): void {
    console.log('ngOnDoChecked');
  }
}