import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Injectable()
export class ProductDetailGuard implements CanActivate{

    constructor(private _router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;
        //check if id is valid
        if(isNaN(id) || id < 1){
            //invalid
            alert('Invalid product Id');
            //redirect to list page
            this._router.navigate(['/products']);
            //abort current navigation
            return false;
        }
        //valid id
        return true;
    }
}