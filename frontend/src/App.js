import { useEffect, useState } from "react";

function App() {
  const [res, setRes] =  useState(null)
  const [resArr, setResArr] = useState(null)
  const [formData, setFormData] = useState({
    asset_type:'Forex',
    asset_symbol:'EUR/USD',
    time_frame:'1d',
    total_outputs:6,
  })
  
  async function get_sr_levels() {
    const params = new URLSearchParams(formData);
    console.log(params)
    const url = new URL('/submit','http://127.0.0.1:5000' );
    url.search = params.toString();
    const res = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Origin':'http://localhost:3000',
        'Access-Control-Allow-Origin':'http://localhost:3000'
      },
    });
    const data = await res.json();
    setRes(data)
  }

  useEffect(()=> {
    if(resArr){console.log(resArr)}
    if(res && !resArr){
      const arr = Object.values(res);
      setResArr(()=>arr)
    }
    else return
  }, [res, resArr])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <div>
          <form>
            <div>
              <label>Asset Type</label>
              <select>
                <option>Forex</option>
                <option>Stocks</option>
                <option>Crypto</option>
              </select>
            </div>
            <div>
            <label>Asset Symbol</label>
            <select>
              <option>EUR/USD</option>
              <option>JPY/USD</option>
              <option>AUD/USD</option>
            </select>
            </div>    
            <div>
              <label>Time Frame</label>
              <select>
                <option>1d</option>
                <option>5y</option>
                <option>10y</option>
              </select>
            </div>
            {/* <div>
              <label>Period</label>
              <input placeholder="200"/>
            </div> */}
            <div>
              <label>Number of Outputs</label>
              <input placeholder="3"/>
            </div>
            <div>
              <button type="button" onClick={()=>get_sr_levels()}>Submit</button>
            </div>
          </form>
         {resArr && <div className="result-container">
            {resArr.map(item => {
              return(
                <div>
                  <p>{item}</p>
                </div>
              )
            })}
          </div>}
        </div>
      </header>
    </div>
  );
}

export default App;
