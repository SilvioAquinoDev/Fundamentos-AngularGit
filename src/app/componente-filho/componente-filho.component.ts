import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrl: './componente-filho.component.css'
})
export class ComponenteFilhoComponent {
  @Input() sobrenome = "";

  @Output() mostraNome = new EventEmitter();

  nome = "";
}
