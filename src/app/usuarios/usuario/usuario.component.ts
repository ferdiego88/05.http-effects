import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuario } from '../../store/actions/usuario.actions';
import { Usuario } from '../../models/user.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private router: ActivatedRoute,
              private store: Store<AppState>) { }

  usuario!: Usuario;
  ngOnInit(): void {

    this.store.select('usuario').subscribe(({user, loading, error}) =>{
      this.usuario = user;
    })


    this.router.params.subscribe(({id})=> {
      this.store.dispatch(cargarUsuario({id}));
    })
  }

}
