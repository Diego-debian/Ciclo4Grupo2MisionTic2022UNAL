/**
 * Insertar uno
 */
 db.departamento.insertOne({"id":1, "nombre_dpto":"Física"})
 /**
  * Insertar muchos
  */
 db.departamento.insertMany([{"id":2, "nombre_dpto":"Física"},
 {"id":3, "nombre_dpto":"Química"},
 {"id":4, "nombre_dpto":"Ingeniería"},
 {"id":5, "nombre_dpto":"Médicina"},
 {"id":6, "nombre_dpto":"Derecho"}])
 /**
  * Eliminar
  */
 db.departamento.remove({"id":1})
 
 /**
  * Consultas condicionadas
  */
 db.departamento.find({"nombre_dpto":"Física"})
 //Quitar información de la consulta
 db.departamento.find({"nombre_dpto":"Física"},
                       {"_id":0, "id":0} )