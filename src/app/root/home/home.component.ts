import { Component, OnInit, ChangeDetectorRef, HostBinding } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { MenuApiService } from '../../core/services/menu/menu-api.service';
import { IMenu } from '../../core/models/menu.model';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter',  [
          style({ opacity: 0}), animate('300ms', style({ opacity: 1 }))
        ]
      ),
      transition(':leave', [
          style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))
        ]
      )
      ]),
    // trigger('fadeInOut', [
    //   state('void', style({
    //     opacity: 0
    //   })),
    //   transition('void <=> *', animate(1000)),
    // ]),
  ]
})
export class HomeComponent implements OnInit {
  menu: Array<any>;
  deg:number = 0;
  nameOfMenu:string = 'false';

  constructor(
    private changeDetection: ChangeDetectorRef,
    private menuApiService: MenuApiService
  ) {}

  ngOnInit() {
    $(".menu").addClass("active");
    this.getMenuToggleAnim();
  }

  getMenuToggleAnim(){
    this.menuApiService.getMenu().subscribe((data)=>{
      this.menu = data;
      this.toggleMenu();
      setTimeout(()=>{this.toggleTransformMenu()}, 0);
    })
  }

  toggleTransformMenu(){
      this.deg = 0;
      for (let i = 1; i <= this.menu.length; i++) {
        let count = 360 / this.menu.length;

        $(`.rotater:nth-child(${i})`).css({
            '-webkit-transform': `rotate(${this.deg}deg)`,
            '-moz-transform': `rotate(${this.deg}deg)`,
            '-ms-transform': `rotate(${this.deg}deg)`,
            '-o-transform': `rotate(${this.deg}deg)`,
            'transform': `rotate(${this.deg}deg)`
        });

        $('.menu').hasClass('active') && $(`.menu.active .rotater:nth-child(${i}) .menuList_name`).css({
          '-webkit-transform': `translateY(-10em) rotate(${-this.deg}deg)`,
          '-moz-transform': `translateY(-10em) rotate(${-this.deg}deg)`,
          '-ms-transform': `translateY(-10em) rotate(${-this.deg}deg)`,
          '-o-transform': `translateY(-10em) rotate(${-this.deg}deg)`,
          'transform': `translateY(-10em) rotate(-${this.deg}deg)`
        });

        !$('.menu').hasClass('active') && $(`.menuList_name`).removeAttr("style");
        this.deg = this.deg + count;
      } 
  };

  toggleMenu(){
      $(".trigger").click(()=>{
        $(".menu").toggleClass("active"); 
        this.toggleTransformMenu()
      })
  };

// mouse enter
  heartBeatAnimStart(e){
    $(e.target).hasClass('pulse') ? $(e.target).removeClass('pulse') : $(e.target).removeClass('');
    $(e.target).addClass('heartBeat');
  };
// mouse leave
  heartBeatAnimEnd(e){
    $(e.target).removeClass('heartBeat');
    $(e.target).addClass('pulse');
  }

  // open sub menu if exist
  openSubmenu(data){
    this.nameOfMenu = data.name; // add active class
    let ifExist;
    if(data.sub){
      this.menu.map((v)=>{
        data.sub.map((x)=>{
          if(v.name === x.name){
            ifExist = true;
          }
        })
      });
      
      this.menuApiService.getMenu().subscribe((menu)=>{
        this.menu = menu;
        if(!ifExist){
          let index = this.menu.findIndex(x => x.name === data.name) ;
          data.sub.map((item)=>{
            this.menu.splice(index+1, 0, item);
          })
        }else{
          this.nameOfMenu = '';
        }
        
        this.changeDetection.detectChanges();
        this.toggleTransformMenu();

        // add another animation for the sub menu
        data.sub.map((item)=>{
          let leng = $('.anim');
          for (let i = 0; i < leng.length; i++) {
            if(leng[i].children[0].innerText.toLowerCase() == item.name.toLowerCase()){
              leng[i].classList.remove("pulse", "infinite");
              leng[i].classList.add("lightSpeedIn", "animIteration_1");
              leng[i].children[0].classList.add('f-20');
            }
          }
        })
      })    
    }else{}
  }

  
  

}
