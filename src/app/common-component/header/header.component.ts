import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedHeadermenu: any;
  constructor(private router: Router) { }

  ngOnInit() {

    if (this.router.url.includes("account")) {
      this.selectedHeadermenu = "account";
    } else if (this.router.url.includes("orderdetails")) {
      this.selectedHeadermenu = "orderdetails";

    } else if (this.router.url.includes("dashboard")) {
      this.selectedHeadermenu = "dashboard";
    }
    console.log(this.selectedHeadermenu);

  }
  logout(){
    window.localStorage.removeItem("UnilEX_CRM_Key");
    window.localStorage.removeItem("UnilEX_CRM_USER_ROLE");
    
    this.router.navigate(['/login']);
  }
  selectHeaderSection(section) {
    this.selectedHeadermenu = section;
  }
}
