import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/HomePage'
import PageContent from './components/PageContent'

export default function Router(props){

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='sr-generator' element={ <PageContent children={[<div className="tool-container">
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
        <div className="symbol-format-example-wrapper">
          <div>
            <p>Forex:</p>
            <p>EUR/USD</p>
          </div>
          <div>
            <p>Stocks:</p>
            <p>AAPL</p>
          </div>
          <div>
            <p>Crypto:</p>
            <p>BTC-USD</p>
          </div>
        </div>

        {/* <div style={{ display: "grid", gridTemplateColumns: '45% 55%' }}>
          <form>
            <div className="inputs-wrapper">
              <div>
                <label>Asset Type</label>
                <select  name='asset_type' onChange={(e) => handleInputChange(e)}>
                  {assetTypesList.map(value => <option>{value}</option>)}
                </select>
              </div>
              <div>
                <label>Asset Symbol</label>
                <input className="uppercase-input" autoCapitalize="character" placeholder="Asset Symbol" name="asset_symbol"  onChange={(e) => handleInputChange(e)}/>
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

            <div>
              <button className="tool-form-submit" type="button" onClick={() => get_sr_levels()}>Submit</button>
            </div>
          </form>
          {resArr && <div className="result-container">
            <h3>Result</h3>
            {resArr.map((item, i) => {
              return (
                <div style={{ display: "flex", justifyContent: 'space-evenly' }}>
                  <p>Level {i + 1}</p>
                  <p>{item}</p>
                </div>
              )
            })}


          </div>}
        </div> */}

      </div>]}>

      </PageContent> }/>

            </Routes>
        </BrowserRouter>
    )
}

