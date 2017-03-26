import {Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs/Subscription'; // to sub and unsub a service

import {IProduct} from './product';
import {ProductService } from './product.service';


@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit, OnDestroy{
    pageTitle:string = 'Product Detail';
    product: IProduct;
    errorMessage: string;
    private sub: Subscription;

    //get route parameter through dependency
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService){} 

    ngOnInit(): void{
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    onBack(): void{
        this._router.navigate(['./products']);
    }
}