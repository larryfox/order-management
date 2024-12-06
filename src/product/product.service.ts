import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  fetchProduct(sku: string): Promise<Product> {
    // Would use an HTTP client or SDK in here
    const product = new Product();
    product.sku = sku;
    product.price = Math.round(Math.random() * 100);
    product.name = 'Neat Picture Frame';
    return Promise.resolve(product);
  }
}
