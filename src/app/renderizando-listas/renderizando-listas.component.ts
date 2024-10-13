import { Component } from '@angular/core';
import { Celular } from '../types/celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrl: './renderizando-listas.component.css'
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    {id:1,nome:"Celular XL",descricao:"celular grande",esgotado:false},
    {id:2,nome:"Celular Normal",esgotado:false},
    {id:3,nome:"Celular Mini",descricao:"celular pequeno",esgotado:true}
  ]
}
