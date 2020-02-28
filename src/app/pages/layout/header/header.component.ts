import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuHamburger(){
    $('.menu').toggleClass('menu_activated', 'slow', "easeOutSine");
  }
  clickedMenuLink(){
    $('.menu').hasClass('menu_activated') && $('.menu').removeClass('menu_activated');
  }

}
