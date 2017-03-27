import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';


import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component';
import {ProductFilterPipe} from './product-filter.pipe';
import {ProductDetailGuard} from './product-guard.service';
import {ProductService} from './product.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations:[
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id', canActivate: [ProductDetailGuard], //add route guard list to this route
                component: ProductDetailComponent}, //route with parameter
        ])
    ],
    //No need export because all components are loaded through route, compared to Shared Module, StarComponent must export because it is used by selector

    //To register a service, add providers in component decorator
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})
export class ProductModule {}