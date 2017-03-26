import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IProduct } from './product';

@Injectable() //Service must have Injectable decorator
export class ProductService {
    private _productUrl = 'api/products/products.json';

    constructor(private _http: Http){}

    getProducts(): Observable<IProduct[]> {                 //User Observable to make asyncronous request
        return this._http.get(this._productUrl)                     //HTTP GET
            .map((response: Response)=><IProduct[]>response.json()) //Map response to our dataType
            .do(data => console.log('All: ' + JSON.stringify(data)))//debug usage
            .catch(this.handleError);                               //Exception Handling
    }

    getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}