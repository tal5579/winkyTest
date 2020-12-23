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

       componentDidMount = () => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("ACCESS_TOKEN", "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFzZCIsImlhdCI6MTYwODcxOTU3MiwiZXhwIjoxNjA4NzI2NzcyLCJpc3MiOiJ3aW5reXRlc3QifQ.YnEQnh2tksCOBNTZL8iCmIE_wYyFZ3Mx1HSQ2MWhH4LUxkGUiHWGtfshTufk1Z62SZe5C0MaWKsF9tK706ZAKQ");
        
        var raw = JSON.stringify({"movieId":"287917512"});
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://localhost:3002/user/movie", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
        
        

    //     fetch('https://itunes.apple.com/us/rss/topmovies/limit=25/json')
    //         .then(res => res.json())
    //         .then(
    //             (result) => {

    //                 this.setState({
    //                     items: result.feed.entry
    //                 });
    //             },
    //             // Note: it's important to handle errors here
    //             // instead of a catch() block so that we don't swallow
    //             // exceptions from actual bugs in components.
    //             (error) => {
    //                 //   this.setState({
    //                 //     isLoaded: true,
    //                 //     error
    //                 //   });
    //             }
    //         )
      }

    render() {
        const items = this.state.items;
        return (
            <div>
                {/* <ul>
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
                </ul> */}
            </div>
        )
    }
}

