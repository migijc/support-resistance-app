I'm building a web application that calculates support and resistance levels for different financial assets (like Forex, stocks, and crypto).

Here's a breakdown of the key components and functionalities I have created thus far:

Frontend (React)

A form that allows users to select:
Asset type (Forex, stocks, crypto)
Asset symbol (e.g., EUR/USD, AAPL)
Time frame (e.g., 1hr, 1 day)
Period (lookback period for data)
Number of outputs (the number of support/resistance levels to calculate?)
Sends the form data to the backend (Flask server) using a GET request with URL parameters.
Displays the calculated support and resistance levels returned from the server (haven't implemented this part yet).
Backend (Flask)

Receives the GET request and extracts the parameters.
Fetches historical price data for the selected asset using yfinance.
Calculates support and resistance levels using pandas and NumPy (logic is done but in another directory as of now).
Returns the calculated levels as a JSON response to the frontend.
Potential use cases

This type of application could be useful for traders or investors who use support and resistance levels in their technical analysis to make trading decisions.

Further development

Some ideas for further development:

Data visualization: Display the price data and the calculated support/resistance levels on a chart using a charting library.
Additional calculations: Implement other technical indicators or calculations (moving averages, RSI, etc.) to provide more comprehensive analysis.
User authentication: Allow users to create accounts and save their preferences.
Real-time data: Integrate with a real-time data source to provide up-to-date support and resistance levels.
Backend improvements:
Caching: Cache the fetched data and calculated levels to improve performance.
Asynchronous tasks: Use Celery or another task queue to handle data fetching and calculations in the background.
I'm excited to see how this project progresses! Let me know if you have any questions as I continue building it.
