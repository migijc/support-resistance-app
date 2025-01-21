import Header from "../components/Header";
import { Link } from "react-router";
import PageContent from "../components/PageContent";
import { useState } from "react";


export default function Home(props){



    return (
    
            <PageContent children={[ 
                <section className="hero-section">
                    <div style={{}}>
                        <h2 className="page-title home-page-title">Discover Powerful <span className="green-bg">Support</span> & <span className="red-bg">Resistance</span> Levels with Ease</h2>
                    </div>
                    <div style={{padding:'.3rem'}}>
                        <p>Tired of spending hours drawing trendlines and trying to pinpoint support and resistance levels? Our generator does the heavy lifting for you. Simply input the asset and timeframe, and our advanced algorithms will instantly calculate the most critical levels. Spend less time on tedious analysis and more time capitalizing on trading opportunities.</p>
                    </div>
                    <div className="call-to-action-wrapper">
                        {/* <Link to={'/sr-generator'}><button className="button-gray">Try it now!</button></Link> */}
                        <button className="button-gray">Try it now!</button>
                        {/* <button>hello</button> */}
                    </div>
                </section>,
                <ContactForm/>
          ]}/>
 
    )
}

function ContactForm() {
    const [email, setEmail] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Here you would typically handle the form submission,
      // such as sending the email to your server.
      console.log('Email submitted:', email);
    };
  
    return (
      <div className="grid">
        <p>
          This is a description for the email form. You can provide more
          information or instructions here.
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
