from flask import Flask, request, render_template, jsonify
from flask_cors import CORS, cross_origin
import pandas as pd
import numpy as np
from scipy import stats
from sklearn.cluster import KMeans
from scipy.signal import find_peaks
import yfinance as yf

app = Flask(__name__)
CORS(app)
@app.route('/')

def calculate_sr(df, total_outputs):
        total_outputs = int(total_outputs)
        close_peaks, _ = find_peaks(df['Close'])
        open_peaks, _ = find_peaks(df['Open'])
        high_peaks, _ = find_peaks(df['High'])
        low_peaks, _ = find_peaks(df['Low'])
        close_valleys, _ = find_peaks(-df['Close'])
        open_valleys, _ = find_peaks(df['Open'])
        high_valleys, _ = find_peaks(df['High'])
        low_valleys, _ = find_peaks(df['Low'])
        cluster_data = pd.DataFrame({'Price': df['Close'].iloc[[*close_peaks,*open_peaks,*high_peaks,*low_peaks, *close_valleys, *open_valleys, *high_valleys, *low_valleys,]]})
        # Apply K-Means clustering
        kmeans = KMeans(n_clusters= int(total_outputs), random_state=0, ).fit(cluster_data)
        res_arr = kmeans.cluster_centers_
        sr_levels = {}
        for i in range(min(total_outputs, len(res_arr))):  # Loop through the array
            sr_levels[f'{i+1}'] = np.round(res_arr[i][0], 5)
        return sr_levels 

# create logic to handle different asset types, IE Stocks dont need to be split etc..
def get_asset_data(asset_symbol, asset_type, time_frame):
    try:
        if(asset_type == 'Forex'):      
            symbol = asset_symbol.split('/')
            asset_symbol = symbol[0] + symbol[1]
            ticker = yf.Ticker(asset_symbol+'=X')
            df = ticker.history(time_frame)
            return df
        else:
            ticker = yf.Ticker(asset_symbol)
            df = ticker.history(time_frame)
            return df
    except Exception as err:
        return err
    

@app.route('/submit', methods=['GET'])
def submit():
    if(request.method) == 'GET':
        asset_type = request.args.get('asset_type')
        asset_symbol = request.args.get('asset_symbol')
        time_frame = request.args.get('time_frame')
        total_outputs = request.args.get('total_outputs')
        asset_data = get_asset_data(asset_symbol,asset_type, time_frame)
        sr_levels = calculate_sr(asset_data,total_outputs)
        return sr_levels

        
        
if(__name__ == '__main__'):
    app.run(debug=True)


