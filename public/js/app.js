class App extends React.Component {
    state = {
        cocktails: [],
        // baseURL: "https://www.thecocktaildb.com/api/json/v1/",
        // apikey: "1/",
        // query: "search.php?s=",
        // searchURL: ""
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(response => response.json())
        .then(data => this.setState({cocktails: data}))
    }


    
    render(){
        // this for some reason prints out 2 console logs, one of the cocktails arr and one of just an object containing 5 drinks
        // i suspect the 2nd console log prints with the populated array b/c there is a delay as the brower awaits the fetch, and as the body re-renders it console.logs again
        console.log(this.state.cocktails.drinks)
        return (
            <div>
                <h1>testing</h1>
                {/* if cocktails.drinks exists, then print. codktails.drinks does not exist until after browser loads and half second delay */}
                {this.state.cocktails.drinks && this.state.cocktails.drinks.map(drink => {
                        return (
                            <h1>{drink.strDrink}</h1>
                        )
                    })
                }
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));