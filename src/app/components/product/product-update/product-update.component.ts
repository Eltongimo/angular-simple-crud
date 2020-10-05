import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product = {} as Product;

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const t = this.productService.readById(id).subscribe( (product) => {
      console.log('elton');
      this.product = product;
    });
  }

  updateProduct(): void{
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Producto actualizado com sucesso');
      this.router.navigate(['/products']);
    }, error => {
      console.log('Ocorreu um erro!');
    } );
  }

  cancel(): void{
    this.router.navigate(['/products']);
  }

}
