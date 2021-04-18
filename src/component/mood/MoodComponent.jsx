import './Component.css';
import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import { TwitterTweetEmbed } from 'react-twitter-embed';

class MoodComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            results: [],
            officialResults: []
        }
    }

    depressed = (e) => {
        e.preventDefault();
        ApiService.searchTwitter("depression")
            .then((res) => {
                console.log("res " , res.data);
               this.setState({results: res.data})
            });
        }

    anxious = (e) => {
        e.preventDefault();
        ApiService.searchTwitter("anxiety")
            .then((res) => {
                console.log("res " , res);
               this.setState({results: res.data})
            });
        }

    stressed = (e) => {
        e.preventDefault();
        ApiService.searchTwitter("stressed")
            .then((res) => {
                console.log("res " , res);
               this.setState({results: res.data})
            });
        }

    sad = (e) => {
        e.preventDefault();
        ApiService.searchTwitter("sadness")
            .then((res) => {
                console.log("res " , res);
               this.setState({results: res.data})
            });
        }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        const isTwitterLoaded = this.state.results.length > 0;

        return(
            <div>
                <h3 className="root">Lets us know how you feeling today </h3>

                <form>
                <div>
                     <br/>
                     <div class="divider"/>
                     <button className="btn btn-warning" onClick={this.depressed}>Depressed</button>
                     <div class="divider"/>
                     <button className="btn btn-warning" onClick={this.anxious}>Anxious</button>
                     <div class="divider"/>
                     <button className="btn btn-warning" onClick={this.stressed}>Stressed</button>
                     <div class="divider"/>
                     <button className="btn btn-warning" onClick={this.sad}>Sad</button>
                </div>

                <br/>

                {isTwitterLoaded &&
                    <h3 className="root-blue">See what others people say about this: {this.state.results.length} relevant tweets in past 7 days.</h3>
                }

                <div>
                     {this.state.results.map(
                         (result) =>
                             (<div key={result.id}><TwitterTweetEmbed tweetId={result.id}/></div>))}
               </div>
            </form>
    </div>
        );
    }
}

export default MoodComponent;