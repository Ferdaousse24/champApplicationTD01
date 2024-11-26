import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    EtudiantComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Module Champ d\'applications';
  seanceName = 'Séance TP 1';
  seanceSummary = 'Prise en main d\'Angular, première application';
  estAuth = false;

  statutEtudiant = 'absent';
  commentaireSeance = '';

  // Déclaration de tabEtudiant
  tabEtudiant = [
    { nom: 'Martin', prenom: 'Anne', statut: 'présent' },
    { nom: 'Bon', prenom: 'Jean', statut: 'absent' },
    { nom: 'Doe', prenom: 'John', statut: 'présent' },
  ];

  // Propriété utilisée par le composant enfant EtudiantComponent
  etudiants = [
    { nomEtu: 'Martin', prenomEtu: 'Anne' },
    { nomEtu: 'Bon', prenomEtu: 'Jean' },
    { nomEtu: 'Doe', prenomEtu: 'John' },
  ];

  constructor() {
    setTimeout(() => {
      this.estAuth = true;
    }, 3000);
  }

  rendTousPres() {
    console.log('Bouton pressé !');
    this.statutEtudiant = 'dormant';
  }
}
