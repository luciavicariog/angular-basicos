import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'Thor', 'Hulk'];
  heroeBorrado: string = "";

  borrarHeroe(){
    // this.heroeBorrado = this.heroes[0];
    // this.heroes.splice(0,1);

    this.heroeBorrado = this.heroes.shift() || '';
  }
}
