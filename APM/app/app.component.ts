import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    
    template: 
    //navbar using routes, tie route to a clickable element eg. <a [routerLink]="['/url',extraParam]">
    //Add <router-outlet> to identify where to display route component
    `
        <div>
            <nav class='navbar navbar-default'>
                <div class='container-fluid'>
                    <a class='navbar-brand'>{{pageTitle}}</a>
                    <ul class='nav navbar-nav'>
                        <li><a [routerLink]="['/welcome']">Home</a><li>
                        <li><a [routerLink]="['/products']">Product List</a></li>
                    </ul>
                </div>
            </nav>
            <div class='container'>
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})
export class AppComponent { 
    pageTitle: string = 'Acme Product Management';
}
