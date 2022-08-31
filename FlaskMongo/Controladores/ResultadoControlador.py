from Modelos.Resultado import Resultado
from Modelos.Mesa import Mesa
from Modelos.Candidato import Candidato

from Repositorios.ResultadoRepositorio import ResultadoRepositorio
from Repositorios.MesaRepositorio import MesaRepositorio
from Repositorios.CandidatoRepositorio import CandidatoRepositorio
class ResultadoControlador():
    #Constructor
    def __init__(self):
        self.repositorioResultado = ResultadoRepositorio()
        self.repositorioMesa = MesaRepositorio()
        self.repositorioCandidato = CandidatoRepositorio()
    
    #Función que devuelve todos los resultados
    def index(self):
        return self.repositorioResultado.findAll()
    
    #Asignación de una mesa y candidato al resultado
    def create(self, infoResultado, id_mesa, id_candidato):
        nuevoResultado = Resultado(infoResultado)
        laMesa = Mesa(self.repositorioMesa.findById(id_mesa))
        elCandidato = Candidato(self.repositorioCandidato.findById(id_candidato))
        nuevoResultado.mesa = laMesa
        nuevoResultado.candidato = elCandidato
        return self.repositorioResultado.save(nuevoResultado)

    #Devolviendo la información de un solo resultado
    def show(self, id):
        elResultado = Resultado(self.repositorioResultado.findById(id))
        return elResultado.__dict__
    

    #Actualiza el resultado de mesa y candidato
    def update(self, id, infoResultado, id_mesa, id_candidato):
        elResultado = Resultado(self.repositorioResultado.findById(id))
        elResultado.id = infoResultado["id"]
        elResultado.numero_mesa = infoResultado["numero_mesa"]
        elResultado.id_partido = infoResultado["id_partido"]
        laMesa = Mesa(self.repositorioMesa.findById(id_mesa))
        elCandidato = Candidato(self.repositorioCandidato.findById(id_candidato))
        elResultado.mesa = laMesa
        elResultado.candidato = elCandidato
        return self.repositorioResultado.save(elResultado)
    
    #Eliminar un resultado
    def delete(self, id):
        return self.repositorioResultado.delete(id)