
class NewDrinkForm extends React.Component {
    state = {
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
        strInstructions: '',
        strDrinkThumb: ''
    }

    handleChange = (event) => {
        // setState is a built-in method of the React library
        this.setState({
            [event.target.id]: event.target.value
        })
    }


    render(){
        let image = <img src="https://i.imgur.com/fgqTj3s.jpg" />
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
        strInstructions: '',
        strDrinkThumb: '',
    }
  
    handleChangeDrink = (event) => {
      this.setState({[event.target.id]:event.target.value})
      this.props.currentDrink.strDrink= event.target.value
    }
    
    handleChangeIngredient1 = (event) => {
        this.setState({[event.target.id]:event.target.value})
        this.props.currentDrink.strIngredient1= event.target.value
      }

    handleChangeIngredient2 = (event) => {
        this.setState({[event.target.id]:event.target.value})
        this.props.currentDrink.strIngredient2= event.target.value
      }

    handleChangeIngredient3 = (event) => {
        this.setState({[event.target.id]:event.target.value})
        this.props.currentDrink.strIngredient3= event.target.value
      }
    
    handleChangeIngredient4 = (event) => {
        this.setState({[event.target.id]:event.target.value})
        this.props.currentDrink.strIngredient4= event.target.value
      }

    handleChangeIngredient5 = (event) => {
        this.setState({[event.target.id]:event.target.value})
        this.props.currentDrink.strIngredient5= event.target.value
      }

    handleChangeStrInstructions = (event) => {
        this.setState({[event.target.id]:event.target.value})
        this.props.currentDrink.strInstructions= event.target.value
      }
  
    handleChangeStrDrinkThumb = (event) =>{
      this.setState({[event.target.id]:event.target.value})
      this.props.currentDrink.strDrinkThumb = event.target.value
    }
    
    render() {
        // console.log(this.props.currentDrink)
      return(
        <div>
            {this.props.currentDrink && 
            <form onSubmit={(event) => this.props.updateCocktail(event, this.props.currentDrink)}>
            <label htmlFor="strDrink">Drink</label>
            <input type="text" value={this.props.currentDrink.strDrink} id="strDrink" onChange={this.handleChangeDrink}/>
            <label htmlFor="strIngredient1">Ingredient</label>
            <input type="text" value={this.props.currentDrink.strIngredient1} id="strIngredient1" onChange={this.handleChangeIngredient1}/>
            <label htmlFor="strIngredient2">Ingredient</label>
            <input type="text" value={this.props.currentDrink.strIngredient2} id="strIngredient2" onChange={this.handleChangeIngredient2}/>
            <label htmlFor="strIngredient3">Ingredient</label>
            <input type="text" value={this.props.currentDrink.strIngredient3} id="strIngredient3" onChange={this.handleChangeIngredient3}/>
            <label htmlFor="Ingredient4">Ingredient</label>
            <input type="text" value={this.props.currentDrink.strIngredient4} id="strIngredient4" onChange={this.handleChangeIngredient4}/>
            <label htmlFor="strIngredient5">Ingredient</label>
            <input type="text" value={this.props.currentDrink.strIngredient5} id="strIngredient5" onChange={this.handleChangeIngredient5}/>
            <label htmlFor="strInstructions">Instructions</label>
            <input type="text" value={this.props.currentDrink.strInstructions} id="strInstructions" onChange={this.handleChangeStrInstructions}/>
            <label htmlFor="strDrinkThumb">URL</label>
            <input type="text" value={this.props.currentDrink.strDrinkThumb} id="strDrinkThumb" onChange={this.handleChangeStrDrinkThumb}/>
            <input type="submit"/>
            </form>
            }
        </div>
      )
    }
  }

class CommunityCocktail extends React.Component {
    state = {
        communityCocktails: [],
        selectCocktail: false,
        editCocktail: false,
        currentDrink: {}
    }

    handleSubmit = (event, newFormState) => {
        event.preventDefault();
        if(newFormState.strDrinkThumb === ''){
            newFormState.strDrinkThumb = 'https://i.imgur.com/fgqTj3s.jpg'
        }
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
                    strInstructions: '',
                    strDrinkThumb: ''
                })
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

    toggleEdit = () => {
        this.setState({editCocktail: !this.state.editCocktail})
    }

    updateCocktail = (event, currentDrink) => {
        event.preventDefault();
        this.toggleEdit();
        fetch('cocktails/' + currentDrink._id, {
            body: JSON.stringify(currentDrink),
            method: "PUT",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(response=>response.json()).then(data=>{
            this.getData()
        })}

    render(){
        return (
            <div>
                {this.state.selectCocktail &&
                    <div className="card">
                        {!this.state.editCocktail &&
                        <div>
                        <p>{this.state.currentDrink.strDrink}</p>
                        <img src={this.state.currentDrink.strDrinkThumb}></img>
                        <ul>
                            <li>{this.state.currentDrink.strIngredient1}</li>
                            <li>{this.state.currentDrink.strIngredient2}</li>
                            <li>{this.state.currentDrink.strIngredient3}</li>
                            <li>{this.state.currentDrink.strIngredient4}</li>
                            <li>{this.state.currentDrink.strIngredient5}</li>
                            
                            <li>{this.state.currentDrink.strInstructions}</li>
                        </ul>
                        <button onClick={this.toggleEdit}>Edit Cocktail</button>
                        </div>}
                        {this.state.editCocktail && 
                        <Edit currentDrink={this.state.currentDrink} toggleEdit={this.toggleEdit} updateCocktail={() => this.updateCocktail(event, this.state.currentDrink)}/>
                        }
                        <button onClick={this.toggleSelectCocktail}>Go back to Community</button>
                    </div>
                }

                {this.state.selectCocktail === false &&
                <div>
                <NewDrinkForm cocktails={this.state.communityCocktails} handleSubmit={this.handleSubmit}/>
                {this.state.communityCocktails && this.state.communityCocktails.map((drink, index) => {
                            return (
                                <div className="card" style={{width: "105px"}}>
                                <h5 className="card-title">{drink.strDrink}</h5>
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


class SearchAPIByDrinkOrIngredient extends React.Component {
    state = {
        cocktails: [],
        baseURL: "https://www.thecocktaildb.com/api/json/v1/",
        apikey: "1/",
        query: "",
        name: '',
        searchURL: "",
        community: false,
        drinkIngredient: {},
        drinkName: {}
    }

    handleChange =(event)=>{
        this.setState ({
            [event.target.id]:event.target.value
        })
    }
    
    handleSubmitIngredient = (event) => {
        event.preventDefault();
        this.setState({
            searchURL: this.state.baseURL + this.state.apikey + 'filter.php?i=' + this.state.ingredient
        }, ()=>{
            fetch(this.state.searchURL).then(response => response.json())
            .then((data)=>{
                this.setState({
                    drinkIngredient:data
                })
            }, err=> console.log(err))
        })
    }

    handleSubmitName = (event) => {
        event.preventDefault();
        this.setState({
            searchURL: this.state.baseURL + this.state.apikey + 'search.php?s=' + this.state.name
        }, ()=>{
            fetch(this.state.searchURL).then(response => response.json())
            .then((data)=>{
                this.setState({
                    drinkName:data
                })
            }, err=> console.log(err))
        })
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmitIngredient}>
                    <label htmlFor="strDrink">Search for a Cocktail by Ingredient</label>
                    <input id="ingredient" type="text" value={this.state.ingredient} onChange={this.handleChange}/>
                    <input type = "submit" value = "Submit" />
                </form>
                
                {this.state.drinkIngredient.drinks && 
                this.state.drinkIngredient.drinks.map(
                    item => {
                        return (
                            <div>
                                {item.strDrink}
                                <img src={item.strDrinkThumb} />
                            </div>
                    
                        )
                    }
                )
                }
                <form onSubmit={this.handleSubmitName}>
                    <label htmlFor="strDrink">Search for a Cocktail by Name</label>
                    <input id="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                    <input type = "submit" value = "Submit" />
                </form>
                {this.state.drinkName.drinks && 
                this.state.drinkName.drinks.map(
                    item => {
                        return (
                            <div>
                                {item.strDrink}
                                <img src={item.strDrinkThumb} />
                            </div>
                        )
                    }
                )
                }
                {this.state.drinkName.drinks === null &&
                <h1>Sorry, this drink doesn't exist in our database...yet. Keep coming back to look, or add a drink yourself!</h1>
                }
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
    }

    
    swapCommunity = () => {
        this.setState({
            community: !this.state.community
        })
    }




    render(){
        return (
            <div className="container">
                {this.state.community &&
                <div>
                    <h1 className="text-center">Community Posted Cocktails</h1>
                    <h2>Try these drinks below, and add your own.</h2>
                    <CommunityCocktail  />
                    <button onClick={this.swapCommunity}>Go Back</button>
                    
                </div>
                }
                {this.state.community === false &&

                <div>
                    <header>
                    <h1 className="text-center">Cocktails</h1>
                    </header>
                    
                    <h2>Find your next favorite drink</h2>
                    <button onClick={this.swapCommunity}>Community Posted Cocktails</button>
                    {this.state.cocktails.drinks && this.state.cocktails.drinks.map(drink => {
                            return (
                                <div className="card">
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
                                    <SearchAPIByDrinkOrIngredient />
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