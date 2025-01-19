import Header from "../components/Header";
import { Link } from "react-router";
import PageContent from "../components/PageContent";


export default function Home(props){



    return (
        <div>
            <PageContent children={[<div className="home-page-content">   
                <section className="hero-section">
                    <div style={{}}>
                        <h2 className="page-title home-page-title">Discover Powerful <span className="green-bg">Support</span> & <span className="red-bg">Resistance</span> Levels with Ease</h2>
                    </div>
                    <div style={{}}>
                        <p>Tired of spending hours drawing trendlines and trying to pinpoint support and resistance levels? Our generator does the heavy lifting for you. Simply input the asset and timeframe, and our advanced algorithms will instantly calculate the most critical levels. Spend less time on tedious analysis and more time capitalizing on trading opportunities.</p>
                    </div>
                    <div className="call-to-action-wrapper">
                        <Link to={'/sr-generator'}><button className="button-gray">Try it now!</button></Link>
                    </div>
                </section>
           </div>]}/>
           
           {/* <section>
                    <div>
                        <h3>Save time</h3>
                    </div>
                    <div>
                        <h3>Improve Accuracy</h3>
                    </div>
                    <div>
                        <h3>Boost trading confidence</h3>
                    </div>
                </section> */}
        </div>
    )
}
