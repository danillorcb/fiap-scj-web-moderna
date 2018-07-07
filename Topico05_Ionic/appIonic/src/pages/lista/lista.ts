import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  listaContatos = [];
  constructor(private service: RemoteServiceProvider) {
    this.getContatos();
  }
  getContatos(): void {
    this.service.getContatos()
      .subscribe(data => this.listaContatos = data);
  }

}
