import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/HomePage'
import PageContent from './PageContent'
import { useState, useEffect } from 'react'

const timeFramesList = ['5D', '1MO', '3MO', '6MO', '1Y', '2Y', '5Y', '10Y', 'YTD', 'MAX']
const assetTypesList = ['Forex', 'Stocks', 'Cryptocurrencies']

function SrToolContainer() {
  const [res, setRes] = useState(null)
  const [resArr, setResArr] = useState(null)
  const [formData, setFormData] = useState({
    asset_type: 'Forex',
    asset_symbol: '',
    time_frame: '5D',
    total_outputs: 3,
  })
  function handleInputChange(e) {
    const prop = e.currentTarget.name;
    const value = e.currentTarget.value;
    setFormData(prev => {
      const copy = { ...prev };
      copy[prop] = value.toUpperCase();
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
    <div className='tool-container'>
      <section className='tool-header-wrapper'>
        <h2>Support & Resistance Zone Generator</h2>
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
        <SrGeneratorForm get_sr_levels={get_sr_levels} handleInputChange={handleInputChange} />
      </section>
      <section>
        {resArr &&
          <div className='result-container'>
            <div className='result-title-container'>
                <h3>Result</h3>
            </div>
            {resArr.map((item, i) => {
              return (
                <div className='result-zone'>
                  <div>
                      <p>Zone {i + 1}</p>
                  </div>
                  <div>
                      <p>{item}</p>
                  </div>
                </div>
              )
            })}
          </div>}
      </section>


    </div>
  )
}

function SrGeneratorForm(props) {
  const { handleInputChange, get_sr_levels } = props
  return (
    <form>
      <div className="inputs-wrapper">
        <div>
          <label>Asset Type</label>
          <select name='asset_type' onChange={(e) => handleInputChange(e)}>
            {assetTypesList.map(value => <option>{value}</option>)}
          </select>
        </div>
        <div>
          <label>Asset Symbol</label>
          <input className="uppercase-input" autoCapitalize="character" placeholder="Asset Symbol" name="asset_symbol" onChange={(e) => handleInputChange(e)} />
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
      </div>
      <div className='button-wrapper'>
        <button className="tool-form-submit" type="button" onClick={() => get_sr_levels()}>Generate Zones</button>
      </div>
    </form>
  )
}

export default function Router(props) {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='sr-generator' element={<PageContent children={[<SrToolContainer />]}>

        </PageContent>} />

      </Routes>
    </BrowserRouter>
  )
}

