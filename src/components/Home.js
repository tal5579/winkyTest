import React, {Component} from "react";
import Button from "@material-ui/core/Button";

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: props.response.catalog.feed.entry,
            wishlist: this.props.response.wishlist
        };
    }

    componentDidMount = () => {
    }

    addMovie = async (target) => {
        const movieId = target.currentTarget.attributes["itemkey"].value
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("ACCESS_TOKEN", this.props.response.token);
        var raw = JSON.stringify({"movieId": movieId});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        let serverResponse = await new Promise((resolve, reject) => {
            fetch("http://localhost:3002/user/movie", requestOptions)
                .then(response => {
                    resolve(response.text());
                })
                .catch(error => reject(error));
        })
        serverResponse = JSON.parse(serverResponse);
        if (serverResponse && serverResponse.error) {
            alert(serverResponse.error);
            return;
        }
        this.setState({wishlist: serverResponse.wishlist})
    }

    deleteMovie = async (target) => {
        const movieId = target.currentTarget.attributes["itemkey"].value
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("ACCESS_TOKEN", this.props.response.token);
        var raw = JSON.stringify({"movieId": movieId});

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        let serverResponse = await new Promise((resolve, reject) => {
            fetch("http://localhost:3002/user/movie", requestOptions)
                .then(response => {
                    resolve(response.text());
                })
                .catch(error => reject(error));
        })
        serverResponse = JSON.parse(serverResponse);
        if (serverResponse && serverResponse.error) {
            alert(serverResponse.error);
            return;
        }
        this.setState({wishlist: serverResponse.wishlist})
    }

    render() {
        const items = this.state.items;
        return (
            <div>
                <ul style={{float: 'left', width: "50%", "text-align": "left", margin: '2px 10px', display: "inline"}}>
                    {items.map(item => (
                        <li key={item.id.attributes["im:id"]}>
                            <h1/>
                            <Button itemKey={item.id.attributes["im:id"]}
                                    onClick={this.addMovie}>Add to wishlist</Button>
                            <h1/>
                            <Button itemKey={item.id.attributes["im:id"]}
                                    onClick={this.deleteMovie}>Delete from wishlist</Button>
                            <h1/>

                            Title : {item.title.label}
                            <h1/>
                            Summary :{item.summary.label}
                            <h1/>
                            <img src={item['im:image'][0].label}/>;
                        </li>
                    ))}
                </ul>
                <ul style={{"text-align": "left", margin: '2px 10px', display: "inline"}}>
                    {this.state.wishlist.map(item => (
                        <li key={item.id.attributes["im:id"]}>
                            Title : {item.title.label}
                            <h1/>
                            Summary :{item.summary.label}
                            <h1/>
                            <img src={item['im:image'][0].label}/>;
                        </li>
                    ))}
                </ul>

            </div>
        )
    }
}

