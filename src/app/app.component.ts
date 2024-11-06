import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Module Champ d\'applications';
  seanceName = 'Séance TP 1';
  seanceSummary = 'Prise en main d\'Angular, première application';
}
