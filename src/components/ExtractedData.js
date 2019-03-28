
import React, { Component } from "react";

import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';

/** Component to show extratced data from url */

const ogpData = {
    height: '250px',
    width: '100%'
};
var urlData = null;
const ExtractedData = (props) => {

        urlData = props.result;
        if(urlData) {
            // beauttyfy the resulting json data from url
            urlData = JSON.stringify(urlData.data, undefined, 4); 
            return(
                <div class="col-md-12">
                    <strong>Extracted Data</strong>
                    <textarea style = { ogpData } value={urlData} onChange = {handleDataChange}></textarea>
                </div>
            );
        } else {
            return(
                <div>
                    <strong>No Data Found...</strong>
                </div>
            );
        }
}

const handleDataChange = event => {
    event.persist();
    const data = event.target.value;
    urlData = data;
}

export default ExtractedData;