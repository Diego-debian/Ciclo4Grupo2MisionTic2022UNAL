import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})

export class SeguridadService {
  elUsuario = new BehaviorSubject<Usuario>(new Usuario);
  constructor(private http: HttpClient, private router: Router) {
    this.verificarSesionActual();
   }
   public get usuariosSesionActiva():Usuario{
    return this.elUsuario.value;
   }

   setUsuario(user: Usuario){
    this.elUsuario.next(user);
   }

   getUsuario(){
    return this.elUsuario.asObservable();
   }

   getDatosSesion(){
    let sesionActual= localStorage.getItem('sesion');
    return sesionActual;
   }

   verificarSesionActual(){
    let sesionActual = this.getDatosSesion();
    if(sesionActual){
      this.setUsuario(JSON.parse(sesionActual));
    }
   }

   login(infoUsuario: Usuario): Observable<Usuario>{
return this.http.post<Usuario>(`${environment.url_gateway}/login`, infoUsuario);
   }

   guardarDatosSesion(datosSesion: any){
    let data: Usuario = {
      _id: datosSesion.user_id,
      token: datosSesion.token,
    };
    localStorage.setItem('sesion', JSON.stringify(data));
    this.setUsuario(data);
   }

   logout(){
    localStorage.removeItem('sesion');
    this.setUsuario(new Usuario());
   }

   sesionExiste(): boolean{
    let sestionActual = this.getDatosSesion();
    return (sestionActual) ? true : false;
   }
}
