package BackendSecurity.Ciclo4Grupo2.MainSecurity.repositorios;

import BackendSecurity.Ciclo4Grupo2.MainSecurity.modelos.Rol;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RepositorioRol extends MongoRepository<Rol, String> {
}
