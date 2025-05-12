import { Component, Input } from '@angular/core';
import { Prenotazione } from '../model/prenotazione.model';

@Component({
  selector: 'app-lista-prenotazioni',
  standalone: true,
  imports: [],
  templateUrl: './lista-prenotazioni.component.html',
  styleUrl: './lista-prenotazioni.component.css'
})
export class ListaPrenotazioniComponent {
  @Input() vettPrenotazione: Prenotazione[] = [];
}
