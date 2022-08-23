from pymongo import MongoClient
import certifi
#Conexión a mongo local
#MONGO_URI = "mongodb://localhost"

#Conexión remota
MONGO_URI = "mongodb+srv://Ciclo4Grupo2:Ciclo4Grupo2@cluster0.9uen0xp.mongodb.net/?retryWrites=true&w=majority"
ca = certifi.where()

def dbConnection():
    try:
        #Conexión local
        #client = MongoClient(MONGO_URI, port=27017)
        client = MongoClient(MONGO_URI, tlsCAFile=ca)
        db = client["ciclo4_grupo2_db"] #se crea la base de datos
    except:
        print("Error de conexión con la db")
    return db