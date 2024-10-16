import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  mesagens: string[] = [];

  logar(mensagem: string){
    console.log(mensagem);
    this.mesagens.push(mensagem);
  }

  exibeTodosOsLogs(){
    console.log(this.mesagens);
  }

}
