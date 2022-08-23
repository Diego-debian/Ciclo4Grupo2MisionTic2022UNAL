from flask import Flask, render_template, jsonify
import database as dbase 
from products import Products
from flask_cors import CORS

app = Flask(__name__)
db = dbase.dbConnection()
CORS(app)

#Home
@app.route('/')
def home():
    return render_template('index.html')

#Método GET
@app.route('/get-products', methods=['GET'])
def getProduct():
    products = db['products']
    productsReceived = products.find()
    response = []
    for i in productsReceived:
        response.append(str(i))
    return jsonify(response)



if __name__ == "__main__":
    app.run(debug=True, port=4000)