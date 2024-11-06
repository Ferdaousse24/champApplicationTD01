import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})

export class EtudiantComponent {
  @Input() statutEtu = "";
  @Input() etudiants: { nomEtu: string; prenomEtu: string }[] = [];


  returnNomEtu(etudiant: { nomEtu: string }): string {
    return etudiant.nomEtu;
  }  
  
  returnPrenomEtu(etudiant: {prenomEtu: string}): string{
    return etudiant.prenomEtu;
  }
}
