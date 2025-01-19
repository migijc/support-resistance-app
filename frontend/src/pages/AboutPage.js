import { Link } from "react-router";
import PageContent from "../components/PageContent";

export default function AboutPage() {

    return (

            <PageContent
                children={[
                    <section>
                    <h2>About Our Support and Resistance Generator</h2>
                    </section>,
                    <section >
                        <h3>Empowering Traders with Precision and Ease</h3>
                        <p>
                            Support and resistance levels are the cornerstone of technical analysis,
                            providing crucial insights into potential price turning points.
                            However, manually identifying these levels can be time-consuming and subjective.

                            Our Support and Resistance Generator was created to address this challenge.
                            We leverage advanced algorithms and historical price data to automatically calculate the most significant support and resistance levels for a variety of assets,
                            including Forex, stocks, and cryptocurrencies.
                        </p>
                    </section>,
                    <section>
                        <h3>Our mission is to:</h3>
                        <p>Simplify technical analysis: Make it easier for traders of all levels to identify key support and resistance levels.</p>
                        <p>Improve accuracy: Provide reliable and objective calculations based on historical data.</p>
                        <p>Save time: Automate the process of finding S/R levels, freeing up traders to focus on other aspects of their strategy.</p>
                        <p>Boost confidence: Empower traders to make more informed decisions with greater confidence.</p>
                    </section>,
                    <section>
                        <h3>Who is this tool for?</h3>
                        <p>Beginner traders: New to technical analysis and looking for an easy way to identify support and resistance levels.</p>
                        <p>Experienced traders: Seeking a more efficient and accurate way to calculate S/R levels.</p>
                        <p>Financial analysts: Incorporating support and resistance analysis into their research and reporting.</p>
                    </section>,
                    <section>
                        <p>We are dedicated to providing a reliable and user-friendly tool that helps traders of all levels
                             improve their technical analysis and make more informed trading decisions.
                              We continuously refine our algorithms and update our data to ensure accuracy and relevance.
                        </p>
                        <p>Try our Support and Resistance Generator today and experience the difference!</p>
                    </section>,
                    <div>
                        <Link to={'/sr-generator'}><button>Get Started</button></Link>
                    </div>
                ]}
            />
       

    )
}
