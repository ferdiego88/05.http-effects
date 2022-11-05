import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  listaUsuarios:Usuario[] = [];

  ngOnInit(): void {

    this.store.select('usuarios').subscribe(({users}) => this.listaUsuarios = users )

    this.store.dispatch(cargarUsuarios());
  }


}
