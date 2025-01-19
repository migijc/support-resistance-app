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
      </div>]}>

      </PageContent> }/>
            </Routes>
        </BrowserRouter>
    )
}

{/* <div className="symbol-format-example-wrapper">
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
      </div> */}
