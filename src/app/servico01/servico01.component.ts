import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-servico01',
  templateUrl: './servico01.component.html',
  styleUrl: './servico01.component.css'
})
export class Servico01Component {
  nome = "";

  constructor(private logger: LoggerService){}

  adicionarNome(){
    alert(`O nome ${this.nome} foi adicionado`);
  }

  adicionarNome2(){
    this.logger.logar(`O nome ${this.nome} foi adicionado`);
  }
}
