import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/user.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  listaUsuarios:Usuario[] = [];
  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {

    this.usuarioService.getUsers().subscribe((usuarios) => {
      this.listaUsuarios = usuarios;
    })
  }

}
