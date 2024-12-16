import { Component } from  '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from  '@angular/router';


@Component({
selector:  'app-root',
imports: [RouterOutlet, RouterLink, RouterLinkActive],
templateUrl:  './app.component.html',
styleUrls: ['./app.component.css'],
standalone:  true
})

export  class  AppComponent {
title  =  'Yay! Routing is life';
}
