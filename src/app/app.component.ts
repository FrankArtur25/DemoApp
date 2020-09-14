import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  palabra = 'AGUACATE';
  palabraOculta = '';

  gane = false;
  pierdo = false;

  intentos = 0;

  constructor(){
    this.palabraOculta = '_ '.repeat(this.palabra.length);
  }

  comprobar(letrs){
  
    this.existeLetra(letrs);

    const arr = this.palabraOculta.split(' ');

    for( let i = 0; i < this.palabra.length; i++){
      if(this.palabra[i] === letrs){
        arr[i] = letrs;
      }
    }

    this.palabraOculta = arr.join(' ');

    this.verificaGane();
  }

  verificaGane(){
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');

    if(palabraEvaluar === this.palabra){
      this.gane = true;
      console.log('Usuario Gano');
    }

    if (this.intentos >= 9){
      this.pierdo = true;
      console.log('Usuario perdio');
    }
  }


  existeLetra(letr){
    if(this.palabra.indexOf(letr) >= 0){
      // console.log('La letra existe: ' + letr);
    }else{
      // console.log('La letra No existe: ' + letr);
      this.intentos ++;
    }
  }
}
