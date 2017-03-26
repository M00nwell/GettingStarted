import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,  //Relative Paths with Module Id
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent
                implements OnInit{
    pageTitle: string = 'Product List';
    isImageShowed: boolean = false;
    listFilter: string = '';
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService){
    }// To inject a service, use constructor

    toggleImage(): void {
        this.isImageShowed = !this.isImageShowed;
    }

    ngOnInit(): void{
        //Subscribe a observable: Observable.subscribe(valueFn,errorFn,CompleteFn)
        this._productService.getProducts().subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error
        );
    }

    onRatingClicked(message: string): void{
        this.pageTitle = 'Product List ' + message;
    }
}