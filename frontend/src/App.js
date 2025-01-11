import { useEffect, useState } from "react";

function App() {
  const [res, setRes] =  useState(null)
  const [formData, setFormData] = useState({
    asset_type:'Forex',
    asset_symbol:'EUR/USD',
    time_frame:'1hr',
    period: '600',
    total_outputs:'5',
  })
  
  async function getData() {
    const params = new URLSearchParams(formData);
    const url = new URL('/submit','http://127.0.0.1:5000' );
    url.search = params.toString();
  
    const res = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  }
  useEffect(()=>{
    if(res === null){
      getData()
      setRes(1)
    }
    console.log(res)
  }, [res])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <div>
          <form>
            <select>
              <option>Forex</option>
              <option>Stocks</option>
              <option>Crypto</option>
            </select>
            <select>
              <option>EUR/USD</option>
              <option>JPY/USD</option>
              <option>AUD/USD</option>
            </select>
            <div>
              <label>Time Frame</label>
              <select>
                <option>1m</option>
                <option>15m</option>
                <option>1hr</option>
              </select>
            </div>
            <div>
              <label>Period</label>
              <input placeholder="200"/>
            </div>
            <div>
              <label>Number of Outputs</label>
              <input placeholder="3"/>
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
