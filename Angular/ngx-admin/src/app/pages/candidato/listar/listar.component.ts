import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Candidato } from '../../../modelos/candidato.model';
import { CandidatoService } from '../../../servicios/candidato.service';
@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  candidatos: Candidato[];
  nombresColumnas: string[] = ['_id', 'Cédula', 'Número Resolución', 'Nombre', 'Apellido'];
  constructor(private miServicioCandidato: CandidatoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar():void{
    this.miServicioCandidato.listar().
    subscribe(data => {
      this.candidatos = data;
    })
  }

  agregar():void{
    console.log("agregando nuevo candidato")
  }

  editar(id:string): void{
    console.log("editando a" + id)
  }
  eliminar(id:string):void{
    console.log("Eliminando");
    Swal.fire({
    title: 'Eliminar candidato',
    text: "¿Está seguro que quiere eliminar al candidato",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar'
    }).then((result) =>{
      if (result.isConfirmed){
        this.miServicioCandidato.eliminar(id).
        subscribe(data => {
          Swal.fire(
            'Eliminado!',
            'El candidato ha sido eliminado correctamente',
            'success'
          )
          this.ngOnInit();
        })
      }
    })
  }

}
