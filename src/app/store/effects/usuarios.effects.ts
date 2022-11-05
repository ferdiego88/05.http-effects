import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import * as usuariosActions from "../actions";
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {

  constructor(private actions$: Actions,
              private usuarioService: UsuarioService) {

  }

  cargarUsuarios$ = createEffect(

    () => this.actions$.pipe(
      ofType(usuariosActions.cargarUsuarios),
      mergeMap(
        (): Observable<any> => this.usuarioService.getUsers()
          .pipe(
              map(usuarios => usuariosActions.cargarUsuariosSuccess({usuarios})),
              catchError(err => of (usuariosActions.cargarUsuariosError({payload:err})) )
          )
        )
    )

  ) ;
}
