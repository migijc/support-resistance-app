import pandas as pd
import pandas_ta as ta 
import numpy as np
import requests 
import math
from scipy import stats
import xlsxwriter
import plotly.graph_objects as go
import yfinance as yf
from sklearn.cluster import KMeans
from scipy.signal import find_peaks


# ticker_symbol = 'AAPL'
# apple_ticker = yf.Ticker(ticker_symbol)

# historical_data = apple_ticker.history(period='1y')
# print(historical_data)

# def create_test_ticket():
#     msft = yf.Ticker("EURUSD=X")
#     hist = msft.history('5y')
#     print(hist)

def get_asset_data(asset_symbol, asset_type, time_frame):
    try:
        if(asset_type == 'Forex'):      
            symbol = asset_symbol.split('/')
            asset_symbol = symbol[0] + symbol[1]
            ticker = yf.Ticker(asset_symbol+'=X')
            df = ticker.history(time_frame)
            print(df)
            return df
        else:
            ticker = yf.Ticker(asset_symbol)
            df = ticker.history(time_frame)
            return df
    except Exception as e:
        print(e)

df = get_asset_data('USD/JPY', 'Forex', '1Y')

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
        print(sr_levels)
        return sr_levels 

calculate_sr(df, 4)
