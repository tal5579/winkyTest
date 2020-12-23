import React, { Component } from "react";

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('https://itunes.apple.com/us/rss/topmovies/limit=25/json')
            .then(res => res.json())
            .then(
                (result) => {

                    this.setState({
                        items: result.feed.entry
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    //   this.setState({
                    //     isLoaded: true,
                    //     error
                    //   });
                }
            )
    }

    render() {
        const items = this.state.items;
        return (
            <div>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                          <h1></h1>
                          Title : {item.title.label}
                          <h1></h1>
                           Summary :{item.summary.label}
                           <h1></h1>
                           <img src={item['im:image'][0].label} />;
                        </li>
                    ))}
                </ul>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                          <h1></h1>
                          Title : {item.title.label}
                          <h1></h1>
                           Summary :{item.summary.label}
                           <h1></h1>
                           <img src={item['im:image'][0].label} />;
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

