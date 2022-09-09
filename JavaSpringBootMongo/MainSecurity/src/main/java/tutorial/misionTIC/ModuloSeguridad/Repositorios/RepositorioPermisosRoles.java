package tutorial.misionTIC.ModuloSeguridad.Repositorios;

import org.springframework.data.mongodb.repository.MongoRepository;
import tutorial.misionTIC.ModuloSeguridad.Modelos.PermisosRol;

public interface RepositorioPermisosRoles extends MongoRepository<PermisosRol, String> {
}
