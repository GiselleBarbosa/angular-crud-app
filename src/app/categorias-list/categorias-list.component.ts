import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../shared/services/categoria.service';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss']
})
export class CategoriasListComponent implements OnInit {

  constructor(private categoriaService : CategoriaService ) { }

  ngOnInit(): void {
  }

}
