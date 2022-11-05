import { createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/user.model';
import { cargarUsuarios, cargarUsuariosSuccess,cargarUsuariosError } from '../actions/index';

export interface UsuariosState {
    users   : Usuario[],
    loaded  : boolean,
    loading : boolean,
    error   : any
}

export const usuariosinitialState: UsuariosState = {
    users    : [],
    loaded   : false,
    loading  : false,
    error    : null
}

export const _usuariosReducer = createReducer(
    usuariosinitialState,
    on(cargarUsuarios, state => ({ ...state, loading: true})),


    on(cargarUsuariosSuccess, (state,{usuarios}) => ({
       ...state,
       loading: false,
       loaded: true,
      users: [...usuarios]
    })),

    on(cargarUsuariosError, (state,{payload}) => ({
      ...state,
      loading: false,
      loaded: false,
      error: {
        url: payload.url,
        name:payload.name,
        message: payload.message
      },
      users: []
    }))

);
