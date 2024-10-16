import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrl: './ciclo-de-vida.component.css'
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy {


  ngOnInit(): void {
    console.log("O evento OnInit disparou");
    //this.timer = setInterval(() => this.horario = new Date(), 10000);
  }
  
  horario = new Date();
  timer: any = null!;

  @Input() texto = "";

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
