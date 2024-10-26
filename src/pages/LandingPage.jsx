import React from "react";
import landingimage from "../landingimage.png";
import Limg1 from "../Limg1.png";
import Limg2 from "../Limg2.png";
import Limg3 from "../Limg3.png";
export default function LandingPage() {
    return (
        <div className="landing_container">
            <div className="section_one">
                <img src={landingimage} />
                <div className="landing_text">
                    <h1>INVENTORY MANAGEMENT SYSTEM</h1>
                    <h3>"Track your inventory in real-time and optimize your purchase with our modern solution"</h3>
                </div>
            </div>
            <div className="section_two">
                <div className="part_a">
                    <h3>Real-Time Tracking Stay updated with live inventory counts and track stock movements effortlessly.
                    </h3>
                    <img src={Limg1} />
                </div>
                <div className="part_a">
                    <h3>Automated Alerts Get notifications when stock levels are low, and avoid out-of-stock situations.
                    </h3>
                    <img src={Limg2} />
                </div>
                <div className="part_a">
                    <h3>Detailed reports Generate detailed reports for stocks, analysis, trends, forecasting with ease.</h3>
                    <img src={Limg3} />
                </div>
            </div>
            <footer>
                    <p>© 2024 Inventory Management System. All Rights Reserved. <a>Privacy Policy</a></p>
            </footer>
        </div>
    )
}