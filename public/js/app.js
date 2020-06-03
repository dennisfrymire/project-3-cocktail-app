class App extends React.Component {
    state = {
        cocktails: [],
        baseURL: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=/",
        // apikey: "1/",
        // query: "search.php?s=",
        ingredient: '',
        searchURL: ""
    }

    componentDidMount(){
        this.setState({
            ingredient:'margarita',
            searchURL: this.state.baseURL + this.state.ingredient
        })
        this.getData();
    }

    getData = () => {
        // fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        fetch(this.state.searchURL)
        .then(response => response.json())
        .then(data => this.setState({cocktails: data}))
    }

    // handleChange = (event) => {
    //     // setState is a built-in method of the React library
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     })
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     this.setState({
    //         searchURL: this.state.baseURL + this.state.apikey + this.state.query + this.state.ingredient
    //     }, () => {
    //         fetch(this.state.searchURL).then((response) => {
    //             return response.json();

    //         }).then((data) => {
    //             console.log(data);
    //             this.setState({
    //                 drink: data,
    //                 ingredient: ''
    //             })
    //         }, err => console.log(err));
    
    //     })
    // }

    render(){
        // this for some reason prints out 2 console logs, one of the cocktails arr and one of just an object containing 5 drinks
        // i suspect the 2nd console log prints with the populated array b/c there is a delay as the brower awaits the fetch, and as the body re-renders it console.logs again
        console.log(this.state.cocktails.drinks)
        return (
            <div>
                <h1>testing</h1>
                {/* if cocktails.drinks exists, then print. cocktails.drinks does not exist until after browser loads and half second delay */}
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