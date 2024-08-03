import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../model/product.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart , faShoppingCart} from '@fortawesome/free-solid-svg-icons';





@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  faHeart = faHeart;
  faShoppingCart = faShoppingCart  ;

  loading: boolean = true;
  public product?: IProduct;

  private _route = inject(ActivatedRoute)
  private _apiService = inject(ApiService)

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._apiService.getProduct(params['id']).subscribe((data: IProduct) => {
        this.product = data
        this.loading = false;

      });
    })
  }
}
