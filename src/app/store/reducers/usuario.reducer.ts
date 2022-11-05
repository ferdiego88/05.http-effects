import { createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/user.model';
import { cargarUsuario, cargarUsuarioSuccess,cargarUsuarioError } from '../actions/index';

export interface UsuarioState {
    id      : string,
    user    : Usuario,
    loaded  : boolean,
    loading : boolean,
    error   : any
}

export const UsuarioinitialState: UsuarioState = {
    id       : '',
    user     : {
      id: 0,
      first_name: '',
      last_name: '',
      avatar: '',
      email: ''
    },
    loaded   : false,
    loading  : false,
    error    : null
}

export const _UsuarioReducer = createReducer(
    UsuarioinitialState,
    on(cargarUsuario, (state, {id}) => ({ ...state, loading: true, id})),


    on(cargarUsuarioSuccess, (state,{usuario}) => ({
       ...state,
       loading: false,
       loaded: true,
       user: {...usuario}
    })),

    on(cargarUsuarioError, (state,{payload}) => ({
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
