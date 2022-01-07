import React from "react";
import AboutUs from "./Homepage_Components/AboutUs";
import Carousel from "../src/Homepage_Components/Carousel";
import ContactUs from "../src/Homepage_Components/ContactUs";
import Faq from "./Homepage_Components/Faq";

const Homepage = () =>
{
    return(
        <div>
            <Carousel/>
            <AboutUs/>
            <ContactUs/>
            <Faq/>
        </div>
    )
}
export default Homepage;


