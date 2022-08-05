import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() onClose = new EventEmitter();
  @Input() isExistFooter = true;
  @Input() defaultButton = true;
  
  constructor(private el: ElementRef) {
    //console.log(el.nativeElement);
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  onCloseClick() {
    this.onClose.emit();
  }
}