import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staff = [
    {
      name: 'Hermine',
      position: 'Office Administrative Manager',
      imgs: ['../assets/img/staff/Hermine/hem1.png', '../assets/img/staff/Hermine/hem2.png', '../assets/img/staff/Hermine/hem3.png']
    },
    {
      name: 'Mary',
      position: 'Sales and Marketing Manager',
      imgs: ['../assets/img/staff/Mary/mer1.png', '../assets/img/staff/Mary/mer2.png', '../assets/img/staff/Mary/mer3.png']
    },
    {
      name: 'Lilit',
      position: 'Operations Manager',
      imgs: ['../assets/img/staff/Lilit/lil1.png', '../assets/img/staff/Lilit/lil2.png', '../assets/img/staff/Lilit/lil3.png']
    },
    {
      name: 'Gurgen P.',
      position: 'Back End Developer',
      imgs: ['../assets/img/staff/Gugo/gugo1.png', '../assets/img/staff/Gugo/gugo2.png', '../assets/img/staff/Gugo/gugo3.png']
    },
    {
      name: 'Vazgen',
      position: 'Mobile Developer',
      imgs: ['../assets/img/staff/Vazgen/vazgen1.png', '../assets/img/staff/Vazgen/vazgen2.png', '../assets/img/staff/Vazgen/vazgen3.png', '../assets/img/staff/Vazgen/vazgen4.png']
    }

  ];
  count: number;
  mouseEv:any;
  title = 'brain-fors';
  
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {}

  xxx(idx, member){
    $(`.team-member${idx}`).attr("src", member.imgs[this.count++]);
    if (this.count ==  member.imgs.length) {
      this.count = 0;
    };
  }

  mouseEnterImg(member, idx){
    this.count = 1;
    this.mouseEv = setInterval(()=>{
     this.xxx(idx, member);
    }, 500)
    this.cd.detectChanges()
  }

  mouseLeaveImg(member, idx){
    clearInterval(this.mouseEv)
    $(`.team-member${idx}`).attr("src", member.imgs[0]);
    this.count = 1;
  }


}

