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
 db.materia.remove({"id":ObjectId("63003b5d7c49476cb489c2b7") })
 
 /**
  * Consultas condicionadas
  */
 db.departamento.find({"nombre_dpto":"Física"})
 //Quitar información de la consulta
 db.departamento.find({"nombre_dpto":"Física"}, {"id":0} )

 /**
  * Consultas organizadas
  */
 db.departamento.find({},{"_id":0,"id":0})
 db.departamento.find({},{"_id":0,"id":0}).sort({"nombre_dpto":1})

/**
 * Limitar consultas
 */
 db.departamento.find({},{"_id":0,"id":0}).sort({"nombre_dpto":1}).limit(2)

 /**
  * Ciclos for => ForEach
  */
 db.departamento.find({},{"_id":0,"id":0}).sort({"nombre_dpto":1}).forEach(function(dpto)
 {
    print("Nombre del departamento: "+ dpto.nombre_dpto)
 })
 /**
  * Llenar la colección materia
  */

 db.materia.insertMany([
    {"id":1,"nombre":"Algebra Lineal","creditos":20},
    {"id":2,"nombre":"Derecho Internacional","creditos":25},
    {"id":3,"nombre":"Mecánica Cúantica","creditos":20},
    {"id":4,"nombre":"Ánatomia","creditos":20},
    {"id":5,"nombre":"Derecho civil","creditos":20},
 ])

 /**
  * Contar documentos
  */
  db.materia.count()

  /**
   * Actualizaciones
   */
   db.materia.update({"id":1},{ "id" : 1, "nombre" : "Algebra Lineal", "creditos" : 25})
   db.materia.update({"id":1},{ "creditos" : 25},{ upsert: true})
   db.materia.update({"creditos" : 25},{ "id" : 1, "nombre" : "Algebra Lineal", "creditos" : 25}, ,{ upsert: true}))
   db.materia.update({"id":1},{$set:{"creditos":25}},{ upsert: true}))
   db.materia.update({"id":1},{$rename:{"name":"nombre"}},{ upsert: true})

   /**
    * Base relacionada
    */

   db.materia.aggregate({
    $lookup:{
        from:'departamento',
        localField:'nombre_dpto',
        foreignField:'nombre_dpto',
        as:'departamento'
    }
   })