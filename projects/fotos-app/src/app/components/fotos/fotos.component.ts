import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { JsonplaceholderService, Foto } from '../../services/jsonplaceholder.service';

@Component({
  selector: 'app-fotos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fotos.component.html',
  styleUrl: './fotos.component.css'
})
export class FotosComponent implements OnInit {
  fotos: Foto[] = [];
  loading = true;

  constructor(
    private jsonService: JsonplaceholderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.jsonService.getFotos(12, 0).subscribe({
      next: (data) => {
        this.fotos = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar fotos:', err);
        this.loading = false;
      }
    });
  }

  verDetalle(id: number): void {
    this.router.navigate(['/detalle', id]);
  }
}