from flask import Flask, request, render_template, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def test_func():
    return 'Hello'

@app.route('/submit', methods=['GET'])
def submit():
    if(request.method) == 'GET':
        # data = request.get_json()
        asset_type = request.args.get('asset_type')
        asset_symbol =request.args.get('asset_symbol')
        time_frame = request.args.get('time_frame')
        period =request.args.get('period')
        total_outputs = request.args.get('total_outputs')

        res = {'asset_type':asset_type, 'asset_symbol':asset_symbol, 'time_frame':time_frame, 'period':period, 'total_outputs':total_outputs}
        return(res)
        

if(__name__ == '__main__'):
    app.run(debug=True)


