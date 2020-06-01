class App extends React.Component {
    state = {
        cocktails: [],

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
        return (
            <div>
                {this.state.cocktails.length > 0 && 
                    this.state.cocktails.map(item => {
                        return (
                            <h1>item.idDrink</h1>
                        )
                    })
                }
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));