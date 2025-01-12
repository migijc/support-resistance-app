import { useEffect, useState } from "react";
import PageContent from "./components/PageContent";
import Header from "./components/Header";

const timeFramesList = ['1d', '5d', '1mo', '3mo', '6mo', '1y', '2y', '5y', '10yr', 'ytd', 'max']
const assetTypesList = ['Forex', 'Stocks', 'Cryptocurrencies']
const stocksListTEMP = ['MSFT', 'AAPL', 'GME']
const forexListTEMP = ['EUR/USD', 'USD/JPY', 'AUD/USD'];
const cryptocurrenciesListTEMP = ['BTC-USD', 'ETH-USD', 'ETH-BTC']

function App() {
  const [res, setRes] = useState(null)
  const [resArr, setResArr] = useState(null)
  const [formData, setFormData] = useState({
    asset_type: 'Forex',
    asset_symbol: 'EUR/USD',
    time_frame: '1d',
    total_outputs: 3,
  })

  function handleInputChange(e) {
    const prop = e.currentTarget.name;
    const value = e.currentTarget.value;
    setFormData(prev => {
      const copy = { ...prev };
      copy[prop] = value;
      return copy
    })
  }

  async function get_sr_levels() {
    const params = new URLSearchParams(formData);
    console.log(params)
    const url = new URL('/submit', 'http://127.0.0.1:5000');
    url.search = params.toString();
    const res = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Origin': 'http://localhost:3000',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      },
    });
    const data = await res.json();
    setRes(data)
  }

  useEffect(() => {
    console.log(1)
    if (res && !resArr) {
      const arr = Object.values(res).sort();
      setResArr(() => arr)
    }
    else return
  }, [res])

  return (
    <div className="App">
      <Header children={[<h1>S/R Zone Generator</h1>,]} />
      <PageContent children={[<div className="tool-container">
        <h2>Generate S/R Zones</h2>
        <p>Our Support and Resistance Generator identifies key price levels for various financial assets,
          such as Forex, stocks, and cryptocurrencies.
          These "support" and "resistance" levels indicate potential price barriers where an asset's upward or downward movement might pause or reverse.
          By inputting the asset and desired timeframe,
          the generator employs historical price data and algorithms to automatically calculate these significant levels,
          aiding traders in making informed decisions.
        </p>
        <div className="instruction-message">
          <p>Modify the values and click submit to use</p>
        </div>
        <div style={{display:"grid", gridTemplateColumns:'45% 55%' }}>
          <form>
            <div>
              <label>Asset Type</label>
              <select name='asset_type' onChange={(e) => handleInputChange(e)}>
                {assetTypesList.map(value => <option>{value}</option>)}
              </select>
            </div>
            <div>
              <label>Asset Symbol</label>
              <select name="asset_symbol" onChange={(e) => handleInputChange(e)}>
                {formData.asset_type === 'Stocks' && stocksListTEMP.map(value => <option>{value}</option>)}
                {formData.asset_type === 'Forex' && forexListTEMP.map(value => <option>{value}</option>)}
                {formData.asset_type === 'Cryptocurrencies' && cryptocurrenciesListTEMP.map(value => <option>{value}</option>)}

              </select>
            </div>
            <div>
              <label>Time Frame</label>
              <select name='time_frame' onChange={(e) => handleInputChange(e)}>
                {timeFramesList.map(value => <option>{value}</option>)}
              </select>
            </div>
            <div>
              <label># of Zones</label>
              <input name="total_outputs" onChange={(e) => handleInputChange(e)} placeholder="3" />
            </div>
            <div>
              <button className="tool-form-submit" type="button" onClick={() => get_sr_levels()}>Submit</button>
            </div>
          </form>
          {resArr && <div className="result-container">
            <h3>Result</h3>
            {resArr.map((item, i) => {
              return (
                <div style={{display:"flex", justifyContent:'space-evenly'}}>
                  <p>Level {i + 1}</p>
                  <p>{item}</p>
                </div>
              )
            })}


          </div>}
        </div>

      </div>]}>

      </PageContent>
    </div>
  );
}

export default App;
