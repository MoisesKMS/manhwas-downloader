from flask import Flask
from flask_cors import CORS
from servers import TuManhwas

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/api/tumanhwas/latest-updates')
def TM_latesUpdates():
    return TuManhwas.latest_updates().decode()


if __name__ == '__main__':
#     app.run(debug=True, port=3000)
    app.run()
