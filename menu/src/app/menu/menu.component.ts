import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NavItem} from '../interfaces/nav-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  navItems: NavItem[] = [{
      nome: 'Paginas',
      nomeIcon: '',
      items: [
        {
          nome: 'Pagina 1',
          nomeIcon: 'group',
          route: 'pagina1'
        },
        {
          nome: 'Pagina 2',
          nomeIcon: 'group',
          route: 'pagina2'
        }]},
      {
      nome: 'Pagina 3',
      nomeIcon: '',
      route: 'pagina3'}];

  constructor() { }

  ngOnInit() {
  }

}
