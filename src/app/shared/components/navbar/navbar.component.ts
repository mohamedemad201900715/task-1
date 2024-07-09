import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  currentUrl:string ='';
  title:string='';
constructor(private router: Router){


}
ngOnInit(): void {
  this.router.events.subscribe(() => {
    this.currentUrl = this.router.url;
      if(this.currentUrl == '/'){
        this.title = 'المواد'
      }
      else if(this.currentUrl == '/Exercise' ){
        this.title = 'كل التمارين'
      }
      console.log(this.currentUrl);


  });
}
}
