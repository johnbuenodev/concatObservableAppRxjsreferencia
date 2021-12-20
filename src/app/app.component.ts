import { Component, OnInit } from '@angular/core';
import { concat, interval, range, timer } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'concatAppRxjs';

  valueTake : number;
  soma: number;

  constructor() {
    this.valueTake = 4;
    this.soma = 1;
  }


  ngOnInit(): void {
    //criando um observable de interval com 1000 segundos executar no intervalo de 1 segundo
    //O observador vai executar o take Pegando 4 vezes 
    const timerObserver = interval(1000).pipe(
      take(this.valueTake),
      tap(() => this.soma = this.soma + 1),
      tap(() => console.log(`Value Soma now: ${this.soma}`)),
    );

    //Range executando inicialmente do numero 10 e executando pelo numero de 15 vezes vai executar do numero 10 em diante 15 vezes.
    const rangeTarget = range(10,15);

    //Concatenando os observables
    const consumindoOsObservaveis = concat(timerObserver, rangeTarget);

    //consumindo os observaveis
    consumindoOsObservaveis.subscribe( res => console.log("Take em: " + res));
  }



}
