
class NewDrinkForm extends React.Component {
    state = {
        strDrink: '',
        strDrinkThumb: '',
        strIngredient1: '',
        strMeasure1: '',
        strIngredient2: '',
        strMeasure2: '',
        strIngredient3: '',
        strMeasure3: '',
        strIngredient4: '',
        strMeasure4: '',
        strIngredient5: '',
        strMeasure5: '',
        strGlass: '',
        strInstructions: '',
    }

    handleChange = (event) => {
        // setState is a built-in method of the React library
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render(){
        return (
                <form className='newDrink' onSubmit={(ev) => this.props.handleSubmit(ev, this.state)}>
                    <label htmlFor='strDrink'>Drink Name</label>
                    <input id='strDrink' type='text' value={this.state.strDrink} onChange={this.handleChange}/>
                    <label htmlFor='strMeasure1'>Measure</label> 
                    <input id='strMeasure1' type='text' value={this.state.strMeasure1} onChange={this.handleChange}/>
                    <label htmlFor='strIngredient1'>Ingredient</label>
                    <input id='strIngredient1' type='text' value={this.state.strIngredient1} onChange={this.handleChange}/>
                    <label htmlFor='strMeasure2'>Measure</label> 
                    <input id='strMeasure2' type='text' value={this.state.strMeasure2} onChange={this.handleChange}/>
                    <label htmlFor='strIngredient2'>Ingredient</label>
                    <input id='strIngredient2' type='text' value={this.state.strIngredient2} onChange={this.handleChange}/>
                    <label htmlFor='strMeasure3'>Measure</label> 
                    <input id='strMeasure3' type='text' value={this.state.strMeasure3} onChange={this.handleChange}/>
                    <label htmlFor='strIngredient3'>Ingredient</label>
                    <input id='strIngredient3' type='text' value={this.state.strIngredient3} onChange={this.handleChange}/>
                    <label htmlFor='strMeasure4'>Measure</label> 
                    <input id='strMeasure4' type='text' value={this.state.strMeasure4} onChange={this.handleChange}/>
                    <label htmlFor='strIngredient4'>Ingredient</label>
                    <input id='strIngredient4' type='text' value={this.state.strIngredient4} onChange={this.handleChange}/>
                    <label htmlFor='strMeasure5'>Measure</label> 
                    <input id='strMeasure5' type='text' value={this.state.strMeasure5} onChange={this.handleChange}/>
                    <label htmlFor='strIngredient5'>Ingredient</label>
                    <input id='strIngredient5' type='text' value={this.state.strIngredient5} onChange={this.handleChange}/>
                    <label htmlFor='strInstructions'>Instructions</label>
                    <input id='strInstructions' type='text' value={this.state.strInstructions} onChange={this.handleChange}/>
                    <label htmlFor='strDrinkThumb'>Image Link</label>
                    <input id='strDrinkThumb' type='text' value={this.state.strDrinkThumb} onChange={this.handleChange}/>
                    <input type='submit' />
                    
                </form>
        )
    }
}

class Edit extends React.Component {

    state = {
        strDrink: '',
        strDrinkThumb: ''
    }
  
    handleChange = (event) => {
      this.setState({[event.target.id]:event.target.value})
      this.props.communityCocktails.strDrink= event.target.value
    }
  
    handleChangeURL = (event) =>{
      this.setState({[event.target.id]:event.target.value})
      this.props.communityCocktails.url = event.target.value
    }
    
    render() {
      console.log(this.props.updateCocktail)
      return(
        <form onSubmit={(event) => this.props.updateBookmark(event, this.props.bookmark)}>
          <label htmlFor="title">Drink</label>
          <input type="text" value={this.props.communityCocktails.strDrink} id="title" onChange={this.handleChange}/>
          <label htmlFor="url">URL</label>
          <input type="url" value={this.props.communityCocktail.strDrinkThumb} id="url" onChange={this.handleChangeURL}/>
          <input type="submit" />
        </form>
      )
    }
  }
  
  

class CommunityCocktail extends React.Component {
    state = {
        communityCocktails: [],
        selectCocktail: false,
        currentDrink: {}
    }

    handleSubmit = (event, newFormState) => {
        event.preventDefault();
        console.log(newFormState)
        fetch('/cocktails', {
            body: JSON.stringify(newFormState),
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(newDrink => {
                // newDrink.strDrink = newFormState.strDrink
                // newDrink.strDrinkThumb = newFormState.strDrinkThumb
                console.log(newDrink)
                this.setState({
                    communityCocktails: [...this.state.communityCocktails, newDrink],
                    strDrink: '',
                    strIngredient1: '',
                    strMeasure1: '',
                    strIngredient2: '',
                    strMeasure2: '',
                    strIngredient3: '',
                    strMeasure3: '',
                    strIngredient4: '',
                    strMeasure4: '',
                    strIngredient5: '',
                    strMeasure5: '',
                    strGlass: '',
                    strInstructions: '',
                    strDrinkThumb: ''
                })
                // console.log(this.state.cocktails)
            })
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        fetch('/cocktails')
            .then(response => response.json())
            .then(data => this.setState({communityCocktails: data}))
    }

    deleteCocktail = (id, indexOfItemInArray) => {
        fetch(`/cocktails/${id}`, {method: "DELETE"})
            .then(()=>{
                this.setState({
                    communityCocktails:[
                        ...this.state.communityCocktails.slice(0,indexOfItemInArray), ...this.state.communityCocktails.slice(indexOfItemInArray +1)
                    ]
                })
            })
    }
    
    updateCocktail = (event, communityCocktails) => {
        event.preventDefault();
        alert(event)
        console.log(communityCocktails);
        fetch('cocktails/' + communityCocktails._id, {
            body: JSON.stringify(communityCocktails),
            method: "PUT",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(response=>response.json()).then(data=>{
            this.getData()
        })}

    toggleSelectCocktail = () => {
        this.setState({selectCocktail: !this.state.selectCocktail})
    }

    showCocktail = (id) => {
        this.setState({selectCocktail: !this.state.selectCocktail})
        fetch(`/cocktails/${id}`)
            .then(response => response.json())
            .then(data => this.setState({currentDrink: data})
            )
    }

    render(){
        // console.log(this.state.communityCocktails)
        return (
            <div>
                {this.state.selectCocktail &&
                    <div>
                        <p>{this.state.currentDrink.strDrink}</p>
                        <img src={this.state.currentDrink.strDrinkThumb}></img>
                        <ul>
                            <li>{this.state.currentDrink.strIngredient1}</li>
                            <li>{this.state.currentDrink.strIngredient2}</li>
                            <li>{this.state.currentDrink.strIngredient3}</li>
                            <li>{this.state.currentDrink.strIngredient4}</li>
                        </ul>
                        <button onClick={this.toggleSelectCocktail}>Go Back</button>
                    </div>
                }

                {this.state.selectCocktail === false &&
                <div>
                <NewDrinkForm cocktails={this.state.communityCocktails} handleSubmit={this.handleSubmit}/>
                {this.state.communityCocktails && this.state.communityCocktails.map((drink, index) => {
                                return (
                                    <div>
                                    <p>{drink.strDrink}</p>
                                    <img src={drink.strDrinkThumb}></img>
                                    <button onClick={() => this.deleteCocktail(drink._id, index)}>Delete</button>
                                    <button onClick={() => this.showCocktail(drink._id)}>Show</button>
                                    </div>
                        
                                )
                            })
                        }
                </div>}
            </div>
        )
    }
}


class App extends React.Component {
    state = {
        cocktails: [],
        baseURL: "https://www.thecocktaildb.com/api/json/v1/",
        apikey: "1/",
        query: "filter.php?i=",
        ingredient: '',
        searchURL: "",
        community: false
    }

    componentDidMount(){
        this.setState({
            // ingredient: 'scotch',
            query: 'random.php',
            searchURL: this.state.baseURL + this.state.apikey
        }, () => {
            fetch(this.state.searchURL + this.state.query)
            .then(response => response.json())
            .then(data => this.setState({cocktails: data}))
        })
        // fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        // this.getData();
    }

    // getData = () => {
        // this.setState({
        //     ingredient: 'margarita',
        //     searchURL: this.state.baseURL + this.state.apikey + this.state.query + this.state.ingredient
        // })
        // console.log(this.state.ingredient)
        // console.log(this.state.searchURL)
        // // fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        // fetch(this.state.searchURL + this.state.ingredient)
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data)
        //     this.setState({cocktails: data})
        // })
    // }

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

    // handleSubmit = (event, newFormState) => {
    //     event.preventDefault();
    //     fetch('/cocktails', {
    //         body: JSON.stringify(newFormState),
    //         method: "POST",
    //         headers: {
    //             'Accept': 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(response => response.json())
    //         .then(newDrink => {
    //             // newDrink.strDrink = newFormState.strDrink
    //             // newDrink.strDrinkThumb = newFormState.strDrinkThumb
    //             this.setState({
    //                 cocktails: {drinks: [...this.state.cocktails.drinks, newDrink]},
    //                 strDrink: '',
    //                 strDrinkThumb: ''
    //             })
    //             // console.log(this.state.cocktails)
    //         })
    // }

    swapCommunity = () => {
        this.setState({
            community: !this.state.community
        })
    }

    render(){
        // this for some reason prints out 2 console logs, one of the cocktails arr and one of just an object containing 5 drinks
        // i suspect the 2nd console log prints with the populated array b/c there is a delay as the brower awaits the fetch, and as the body re-renders it console.logs again
        // console.log(this.state.cocktails)
        return (
            <div>
                {this.state.community &&
                <div>
                    <h1>Community Posted Cocktails</h1>
                    <CommunityCocktail />
                    <button onClick={this.swapCommunity}>test</button>
                </div>
                }
                {this.state.community === false &&

                <div>
                    <h1>Cocktails</h1>
                    <h2>Find your next favorite drink</h2>
                    <button onClick={this.swapCommunity}>Community Posted Cocktails</button>
                    {this.state.cocktails.drinks && this.state.cocktails.drinks.map(drink => {
                            return (
                                <div>
                                <h3>Try this at your next party:</h3>
                                <p>{drink.strDrink}</p>
                                <img src={drink.strDrinkThumb}></img>
                                <p>Ingredients:</p>
                                    <p>{drink.strMeasure1} {drink.strIngredient1}  </p>
                                    <p>{drink.strMeasure2} {drink.strIngredient2}  </p>
                                    <p>{drink.strMeasure3} {drink.strIngredient3}  </p>
                                    <p>{drink.strMeasure4} {drink.strIngredient4}  </p>
                                    <p>{drink.strMeasure5} {drink.strIngredient5}  </p>
                                    <p>{drink.strInstructions}</p>
                                </div>
                    
                            )
                        })
                    }
                </div>
                }
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));