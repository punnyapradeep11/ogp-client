
import React, { Component } from "react";

import '../styles/App.css';
import {baseUrl} from '../../config/config';
import 'bootstrap/dist/css/bootstrap.css';
import  ExtractedData from './ExtractedData'
import axios from "axios";

class App extends Component {

    state = { url: "", result: null };
    render() {
        return (
            <div class="container">
                <h1>URL Parsing!</h1>
                <div class="row url-parsing">
                    <div class="col-md-12">
                        <div class="col-md-8 url-input ">
                            <input type="text" value={this.state.url} onChange={this.handleUrlChange.bind(this)} placeholder="Enter Url"/>
                        </div>
                        <div class="col-md-4 url-input ">
                            <button class="btn btn-success" onClick={ this.getExtractedData.bind(this) }>Parse</button>
                        </div>
                    </div>
                </div>
                <div class="row url-parsing">
                    {/* To show the extracted data from url */}
                    <ExtractedData result={this.state.result}/>
                </div>
            </div>
        );
    }

    handleUrlChange(event) {
        event.persist();
        const newUrl = event.target.value;
        this.setState({url: newUrl});
    }

    // Fetch metadata from url
    getExtractedData() {
        setTimeout(() => {
            if(this.state.url != "" || this.state.url != undefined) {
                axios.post('https://igs59g28wk.execute-api.us-east-1.amazonaws.com/default/api/v1/parse', { url: this.state.url })
                .then((result) => {
                    this.setState({result: result})
                })
                .catch((err) => {
                    this.setState({result: null})
                });
            } else {
                alert('Fill the url');
            }
        })
        
        
    }

}

export default App;