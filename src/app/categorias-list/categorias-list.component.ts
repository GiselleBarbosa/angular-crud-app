import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoriaService } from '../shared/services/categoria.service';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss']
})
export class CategoriasListComponent implements OnInit {
  private subscription!: Subscription

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService
      .findAll().subscribe((categorias) => {
        console.log(categorias);
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
