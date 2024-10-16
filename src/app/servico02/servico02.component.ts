import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-servico02',
  templateUrl: './servico02.component.html',
  styleUrl: './servico02.component.css'
})
export class Servico02Component {
  descricao = "";

  constructor(public logger: LoggerService){}

  adicionarProduto(){
    alert(`A descrição do produto ${this.descricao} foi adicionado`);
  }

  adicionarProduto2(){
    this.logger.logar(`A descrição do produto ${this.descricao} foi adicionado`);
  }
}
