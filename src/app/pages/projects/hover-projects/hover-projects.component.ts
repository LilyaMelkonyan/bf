import { Component, OnInit, AfterViewInit, AfterViewChecked, HostListener, ElementRef, ChangeDetectorRef, ViewChild } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { HoverContainerAnimations } from './hover-projects.animations';

import * as $ from 'jquery';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hover-container',
  templateUrl: './hover-projects.component.html',
  styleUrls: ['./hover-projects.component.css'],
  animations: HoverContainerAnimations
})
export class HoverContainerComponent implements OnInit, AfterViewInit, AfterViewChecked{
  state;
  states = ['top', 'right', 'bottom', 'left']
  w:number; h:number; x: number; y:number;
  
  constructor(
    private changeDetection: ChangeDetectorRef
  ) {}

  ngOnInit(){}

  ngAfterViewInit(){}

  ngAfterViewChecked() {}

  @HostListener('mouseenter', ['$event'])
  @HostListener('mouseleave', ['$event'])
  onHover(event: MouseEvent) {
    const direction = event.type === 'mouseenter' ? 'in' : 'out';
    const host = event.target as HTMLElement;
    this.w = host.offsetWidth;
    this.h = host.offsetHeight;

    this.x = (event.pageX - host.offsetLeft - (this.w / 2)) * (this.w > this.h ? (this.h / this.w) : 1);
    this.y = (event.pageY - host.offsetTop - (this.h / 2)) * (this.h > this.w ? (this.w / this.h) : 1);
    
    const side = Math.round((((Math.atan2(this.y, this.x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
    this.state = `${direction}-${this.states[side]}`;
  }

  onDone(event: AnimationEvent) {
    this.state = event.toState.startsWith('out-') ? null : this.state;
    this.changeDetection.detectChanges();
  }

}
