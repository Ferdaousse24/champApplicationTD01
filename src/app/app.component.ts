import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    EtudiantComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Module Champ d\'applications';
  seanceName = 'Séance TP 1';
  seanceSummary = 'Prise en main d\'Angular, première application';
  estAuth = false ;
  
  statutEtudiant = "absent";
  etudiants = [
    { nomEtu: 'Martin', prenomEtu: 'Anne' },
    { nomEtu: 'Bon', prenomEtu: 'Jean' },
    { nomEtu: 'Doe', prenomEtu: 'John' }
  ];
  
  constructor(){
    setTimeout ( ( ) => { this.estAuth = true;} ,3000 ) ;
  }

  rendTousPres(){
    console.log("bouton préssé !")
    this.statutEtudiant = "dormant";
  }
}
