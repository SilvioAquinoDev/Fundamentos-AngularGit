import { Component } from '@angular/core';

@Component({
  selector: 'app-segunto-componente',
  templateUrl: './segunto-componente.component.html',
  styleUrl: './segunto-componente.component.css',
  
})
export class SeguntoComponenteComponent {
  nome = "Silvio"
  dataNascimento = "1983-01-02"
  urlImagem = "/assets/imagem.png"

  mostrarDataNascimento() {
    alert(`A data de nascimento de ${this.nome} é: ${this.dataNascimento}`)
  } 
}
