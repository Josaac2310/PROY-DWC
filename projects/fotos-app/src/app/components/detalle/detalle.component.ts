import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonplaceholderService, Foto } from '../../services/jsonplaceholder.service';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {
  foto: Foto | null = null;
  fotoForm: FormGroup;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jsonService: JsonplaceholderService,
    private fb: FormBuilder
  ) {
    this.fotoForm = this.fb.group({
      title: ['', Validators.required],
      url: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.jsonService.getFotoById(id).subscribe({
      next: (data) => {
        this.foto = data;
        this.fotoForm.patchValue({
          title: data.title,
          url: data.url
        });
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar la foto:', err);
        this.loading = false;
      }
    });
  }

  guardarCambios(): void {
    if (this.fotoForm.valid) {
      console.log('Cambios guardados:', this.fotoForm.value);
      alert('Cambios guardados en consola. Revisa la consola del navegador (F12)');
    }
  }

  volver(): void {
    this.router.navigate(['/fotos']);
  }
}