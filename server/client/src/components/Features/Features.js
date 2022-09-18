import React from "react";
import FeatureBox from "../FeatureBox/FeatureBox";
import featureimage from "./feature_1.png";
import featureimage1 from "./feature_2.png";
import featureimage2 from "./feature_3.png";
import "./Features.css";

function Features(props){
    return(
        <div id='features'>
            <div className='a-container'>
                <FeatureBox image={featureimage} title='Build Your Resume' description = 'Help job seekers to create, make, edit and share resume.'/>
                <FeatureBox image={featureimage1} title='Faster Resume Building' description = 'Webpage designed interactively which helps in faster resume building.'/>
                <FeatureBox image={featureimage2} title='Download in PDF' description = 'You can download Resume in PDF format.'/>
            </div>
        </div>
    );
}
export default Features;