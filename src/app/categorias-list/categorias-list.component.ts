import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaService } from '../shared/services/categoria.service';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss']
})
export class CategoriasListComponent implements OnInit {
  findAllCategorias$!: Observable<Object>

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.findAllCategorias$ = this.categoriaService.findAll();
  }
}
