import json
from flask import Flask, request, Response
from flask import jsonify
from flask_cors import CORS
from Controladores.PartidoControlador import PartidoControlador

app = Flask(__name__)
cors = CORS(app)
miControladorPartido = PartidoControlador()

@app.route("/", methods=["GET"])
def test():
    json = {}
    json["message"] = "Server running ..."
    return jsonify(json)

################################################
#           ENDPOINT  DEL PARTIDO              #
################################################
@app.route("/partidos", methods=['GET'])
def getPartidos():
    json = miControladorPartido.index()
    return jsonify(json)

@app.route("/partidos/<string:id>", methods=['GET'])
def getPartido(id):
    json = miControladorPartido.show(id)
    return jsonify(json)

@app.route("/partidos", methods=['POST'])
def crearPartido():
    data = request.get_json()
    json = miControladorPartido.create(data)
    return jsonify(json)


if __name__ =="__main__":
    app.run(debug=True, port=4000)