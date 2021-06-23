import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() items: [];
  @Input() height: any;
  @Input() title: string = "Le tue liste";
  @Output() onClickElementEmitter: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  public onClickElement(element: any) {
    this.onClickElementEmitter.emit(element);
  }

}
