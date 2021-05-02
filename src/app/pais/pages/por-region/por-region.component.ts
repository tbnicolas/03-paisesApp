import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button {
      margin-right: 5px
    }

    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = [ 'africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva: string = '';
  regionesApi: Country[] = [];


  constructor(private paisService: PaisService) { }

  getClaseCSS( region: string ): string {
    return ( region === this.regionActiva )
           ? 'btn-primary'
           : 'btn btn-outline-primary';
  }

  activarRegion( region: string ) {
    if ( region === this.regionActiva ) {
      return;
    }
    this.regionActiva = region
    this.regionesApi = [];
    this.paisService.buscarRegion(region)
        .subscribe(
          (regiones) => {
            this.regionesApi = regiones;
          }
        )
  }
}
