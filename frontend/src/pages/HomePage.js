import Header from "../components/Header";
import { Link } from "react-router";
import PageContent from "../components/PageContent";


export default function Home(props){



    return (
        <div style={{}}>
            <PageContent children={[<div style={{}}>
                <section className="hero-section">
                    <div style={{}}>
                        <h2 className="page-title home-page-title">Discover Powerful Support and Resistance Levels with Ease</h2>
                    </div>
                    <div style={{}}>
                        <p>Tired of spending hours drawing trendlines and trying to pinpoint support and resistance levels? Our generator does the heavy lifting for you. Simply input the asset and timeframe, and our advanced algorithms will instantly calculate the most critical levels. Spend less time on tedious analysis and more time capitalizing on trading opportunities.</p>
                    </div>
                    <div style={{}}>
                        <Link to={'/sr-generator'}><button className="button-gray">Try It Now!</button></Link>
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
