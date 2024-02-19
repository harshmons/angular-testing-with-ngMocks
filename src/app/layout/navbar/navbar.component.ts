import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingCartState, selectCartCount } from '../../cart/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  count$: Observable<number>;
  constructor( private store:Store<{cart:ShoppingCartState}>) { }

  ngOnInit() {
    this.count$ = this.store.select(selectCartCount)
  }

}
