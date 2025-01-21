import pandas as pd
import pandas_ta as ta 
import numpy as np
import requests 
import math
from scipy import stats
import xlsxwriter
import plotly.graph_objects as go
from flask import Flask, request, render_template, jsonify
import yfinance as yf

def get_asset_data(asset_symbol):
    try:
        response = requests.get(
            f'https://fmpcloud.io/api/v3/historical-chart/1hour/{asset_symbol}?apikey=a020fe0e5ae60634d225bfdc619a26d4'
        )
        response.raise_for_status()  # Raise an exception for bad status codes
        return jsonify(response.json())
    except requests.exceptions.RequestException as e:
        return jsonify({'error': f'Error fetching data: {e}'}), 500

def create_test_ticket():
    msft = yf.Ticker("EURUSD=X")
    hist = msft.history('5y')
    print(hist)

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
    except Exception as e:
        print(e)

get_asset_data('msft', 'Stocks', '1d')
