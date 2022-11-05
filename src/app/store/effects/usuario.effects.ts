import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import * as usuariosActions from "../actions";
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {

  constructor(private actions$: Actions,
              private usuarioService: UsuarioService) {

  }

  cargarUsuario$ = createEffect(

    () => this.actions$.pipe(
      ofType(usuariosActions.cargarUsuario),
      mergeMap(
        (action): Observable<any> => this.usuarioService.getUser(action.id)
          .pipe(
              map(usuario => usuariosActions.cargarUsuarioSuccess({usuario})),
              catchError(err => of (usuariosActions.cargarUsuarioError({payload:err})) )
          )
        )
    )

  ) ;
}
