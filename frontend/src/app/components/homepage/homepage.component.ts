import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() {
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

}
