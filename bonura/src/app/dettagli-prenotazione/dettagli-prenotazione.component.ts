import { Component, Input } from '@angular/core';
import { Prenotazione } from '../model/prenotazione.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dettagli-prenotazione',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dettagli-prenotazione.component.html',
  styleUrl: './dettagli-prenotazione.component.css'
})
export class DettagliPrenotazioneComponent {
  @Input() prenotazione! : Prenotazione;
  allunga: boolean = false;
  estendi(){
    this.allunga = !this.allunga
  }
}
