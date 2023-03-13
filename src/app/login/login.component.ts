import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nome: string = "";
  numero: string = "";
  stringResposta: string = "";

  constructor(private router: Router){}
  verificaUsuarioSenha(){
    if(this.nome === "admin")
    {
      if(this.numero == "123")
      {
        this.router.navigate(['/home']);
      }
      else
      {
        this.stringResposta = "Usuario ou senha invalido";
      }
    }
    else
    {
        this.stringResposta = "Usuário ou senha invalido";
    }
  }
}