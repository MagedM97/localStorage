import { Product } from './product';
export interface CartLine {
  product: Product;
  quantity: number;
  price: number;
}

export class Person  {

  cartLines= [
    {
      price: 500,
      quantity: 2,
      product: {
        _id: '0',
        category_id: '1',
        description: '',
        discount: 0.1,
        image: '/assets/img/prod-1.jpg',
        is_featured: true,
        is_recent: true,
        name: 'Product 1',
        price: 500,
        rating: 4.5,
        rating_count: 45,
        color:'white',
        size:'s'
      },
    },
    {
      price: 150,
      quantity: 4,
      product: {
        _id: '0',
        category_id: '1',
        description: '',
        discount: 0.1,
        image: '/assets/img/prod-2.jpg',
        is_featured: true,
        is_recent: true,
        name: 'Product 2',
        price: 150,
        rating: 4.5,
        rating_count: 45,
        color:'white',
        size:'s'
      },
    },
  ];



  getTotal(): number {
    return this.getShipping() + this.getSubTotal();
  }
  getSubTotal(): number {
    return this.cartLines
      .map((x) => x.price * x.quantity)
      .reduce((a, v) => (a += v), 0);
  }
  getShipping(): number {
    return (
      this.cartLines.map((x) => x.quantity).reduce((a, v) => (a += v), 0) * 2
    );
  }
  incQuantity(i: number) {
    this.cartLines[i].quantity += 1;
    
    }
    decQuantity(i: number) {
      if (this.cartLines[i].quantity > 1) this.cartLines[i].quantity -= 1;
     
      }
      remove(i: number) {
        this.cartLines.splice(i, 1);
      }
    }
