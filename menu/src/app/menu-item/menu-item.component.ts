import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {NavItem} from '../interfaces/nav-item';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() items: NavItem[];
  @ViewChild('itemMenu') public itemMenu;

  constructor() {
  }

  ngOnInit() {
  }

}
