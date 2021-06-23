import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private _router:Router) {
  }

  public HEROES = [
    {id: 1, name: 'Superman'},
    {id: 2, name: 'Batman'},
    {id: 5, name: 'BatGirl'},
    {id: 3, name: 'Robin'},
    {id: 4, name: 'Flash'},
    {id: 1, name: 'Superman'},
    {id: 2, name: 'Batman'},
    {id: 5, name: 'BatGirl'},
    {id: 3, name: 'Robin'},
    {id: 4, name: 'Flash'},
    {id: 1, name: 'Superman'},
    {id: 2, name: 'Batman'},
    {id: 5, name: 'BatGirl'},
    {id: 3, name: 'Robin'},
    {id: 4, name: 'Flash'},
    {id: 1, name: 'Superman'},
    {id: 2, name: 'Batman'},
    {id: 5, name: 'BatGirl'},
    {id: 3, name: 'Robin'},
    {id: 4, name: 'Flash'},
    {id: 1, name: 'Superman'},
    {id: 2, name: 'Batman'},
    {id: 5, name: 'BatGirl'},
    {id: 3, name: 'Robin'},
    {id: 4, name: 'Flash'},
    {id: 1, name: 'Superman'},
    {id: 2, name: 'Batman'},
    {id: 5, name: 'BatGirl'},
    {id: 3, name: 'Robin'},
    {id: 4, name: 'Flash'},
    {id: 1, name: 'Superman'},
    {id: 2, name: 'Batman'},
    {id: 5, name: 'BatGirl'},
    {id: 3, name: 'Robin'},
    {id: 4, name: 'Flash'},
    {id: 1, name: 'Superman'},
    {id: 2, name: 'Batman'},
    {id: 5, name: 'BatGirl'},
    {id: 3, name: 'Robin'},
    {id: 4, name: 'Flash'}
  ];

  ngOnInit(): void {
  }

  onClickElement(item: any) {
    this._router.navigate(['/shopping_list', item.id]);
  }
}
