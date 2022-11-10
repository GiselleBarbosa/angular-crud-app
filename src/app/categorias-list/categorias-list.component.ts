import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, map, Observable, of, Subscription } from 'rxjs';
import { CategoriaService } from '../shared/services/categoria.service';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss'],
})
export class CategoriasListComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  categorias: any;

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.subscription = this.categoriaService.findAll().subscribe((data) => {
      this.categorias = data;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
