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

create_test_ticket()
