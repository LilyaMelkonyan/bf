import { Component, OnInit, AfterViewInit, ElementRef, ChangeDetectorRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projects = [
    {
      name: 'Wine Invest',
      desc: '',
      shortDesc: '',
      img: '',
      link: ''
    },
    {
      name: 'BELLESHOP',
      desc: '',
      shortDesc: '',
      img: '',
      link: ''
    },
    {
      name: 'HELPSY',
      desc: '',
      shortDesc: '',
      img: '',
      link: ''
    },
    {
      name: 'ARTAVAN',
      desc: '',
      shortDesc: '',
      img: '',
      link: ''
    },
    {
      name: 'ECOTOUR',
      desc: '',
      shortDesc: '',
      img: '',
      link: ''
    },
    {
      name: 'STATION TOUR',
      desc: '',
      shortDesc: '',
      img: '',
      link: ''
    },
    {
      name: 'WILD LIFE',
      desc: '',
      shortDesc: '',
      img: '',
      link: ''
    },
    {
      name: 'PLAN HAMMER',
      desc: '',
      shortDesc: '',
      img: '',
      link: ''
    },
    {
      name: 'MUSIC TEACHERS’ HELPER',
      desc: '',
      shortDesc: '',
      img: '',
      link: ''
    },
    {
      name: 'SUTERIA',
      desc: '',
      shortDesc: '',
      img: '',
      link: ''
    },
    {
      name: 'YAGHLI HOUSE',
      desc: '',
      shortDesc: '',
      img: '',
      link: ''
    },
    {
      name: 'PONCHIK MONCHIK',
      desc: '',
      shortDesc: '',
      img: '',
      link: ''
    },
    {
      name: 'SHOGHAKAT',
      desc: '',
      shortDesc: '',
      img: '',
      link: ''
    },
    {
      name: 'SHRJAPAT ',
      desc: '',
      shortDesc: '',
      img: '',
      link: ''
    }
  ];
  
  constructor(
    private changeDetection: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    
  }

  ngAfterViewInit(){
  }

}
