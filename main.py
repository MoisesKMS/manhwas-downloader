from flask import Flask
from servers import TuManhwas

app = Flask(__name__)


@app.route('/api/tumanhwas/latest-updates', methods=['GET'])
def TM_latesUpdates():
    respuesta = TuManhwas.latest_updates()
    respuesta.headers.add('Access-Control-Allow-Origin', '*')
    return respuesta


if __name__ == '__main__':
    app.run(debug=True, port=3000)
