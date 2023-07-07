import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre: string = 'Francisco';

  cargando: boolean = true;

  usuarios: Array<string> = ['Francisco', 'Juan', 'Ana', 'Pedro'];

  constructor() {
    setTimeout(() => {
      this.nombre = 'Pedro';

      this.cargando = false;      
      
    }, 3000);
  }

  doOnClick(e: Event): void {
    console.log('Me hicieron click', e.target);
    this.cargando = !this.cargando;
  }

  ejemplo(algo: string) {
  }
}

