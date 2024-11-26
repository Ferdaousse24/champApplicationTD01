import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {
  @Input() statutEtu: string = '';
  @Input() etudiants: { nom: string; prenom: string; statut: string }[] = []; // Correspond à tabEtudiant
  @Input() commentaireEtudiant: string = '';

  // Fonction pour retourner la couleur selon le statut
  getColorEtu(etudiant: { statut: string }): string {
    return etudiant.statut === 'absent' ? 'red' : 'black';
  }
}
