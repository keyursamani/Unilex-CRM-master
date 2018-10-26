import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {
  selectedSubmenu: any;
  constructor() { }

  ngOnInit() {
    this.selectedSubmenu = "default";
  }
  selectSection(section){
    this.selectedSubmenu = section;
  }
}
