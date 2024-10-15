import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrl: './componente-pai.component.css'
})
export class ComponentePaiComponent {
  sobrenome = "Aquino"

  mostrarNomeCompleto(nomeCompleto: any){
    alert(`O nome completo é: ${nomeCompleto}`)
  }
}
