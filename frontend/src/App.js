import { useEffect, useState } from "react";
import PageContent from "./components/PageContent";
import Header from "./components/Header";
import Router from "./Router";

const timeFramesList = ['5D', '1MO', '3MO', '6MO', '1Y', '2Y', '5Y', '10Y', 'YTD', 'MAX']
const assetTypesList = ['Forex', 'Stocks', 'Cryptocurrencies']
const stocksListTEMP = ['MSFT', 'AAPL', 'GME']
const forexListTEMP = ['EUR/USD', 'USD/JPY', 'AUD/USD'];
const cryptocurrenciesListTEMP = ['BTC-USD', 'ETH-USD', 'ETH-BTC']

function App() {
  const [res, setRes] = useState(null)
  const [resArr, setResArr] = useState(null)
  const [formData, setFormData] = useState({
    asset_type: 'Forex',
    asset_symbol: '',
    time_frame: '5D',
    total_outputs: 3,
  })

  useEffect(()=>{
    console.log('hello')
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
    <div className="App">
      <div>
        <Header children={[<p>S/R Zone Generator</p>,]} />
      </div>
      <div style={{justifySelf:'center'}}>
         <Router/>
      </div>
     
    </div>
  );
}

export default App;
