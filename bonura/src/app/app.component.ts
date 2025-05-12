import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Prenotazione } from './model/prenotazione.model';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ListaPrenotazioniComponent } from './lista-prenotazioni/lista-prenotazioni.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ListaPrenotazioniComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bonura';
  vettPrenotazioni: Prenotazione[] = [];
  http: HttpClient;
  o!: Observable<Prenotazione[]>;
  loading: boolean = false;

  constructor(http: HttpClient) {
    this.http = http;
    this.loading = true;
    this.o = this.http.get<Prenotazione[]>('https://my-json-server.typicode.com/malizia-g/verificaPrenotazioni/prenotazioni');
    this.o.subscribe(this.getData);
  }
  getData = (d: Prenotazione[]) => {
    this.vettPrenotazioni = d;
    console.log(this.vettPrenotazioni)
    this.loading = false;
  }
  salva() {

  }
}



