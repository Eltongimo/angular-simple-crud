import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HeaderService} from '../../components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent {

  constructor(private router: Router, private headerServive: HeaderService) {

    headerServive.headerData = {
      title: 'Cadastro de Productos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  navigateToProductCreate(): void{
    this.router.navigate(['products/create']);
  }
}
