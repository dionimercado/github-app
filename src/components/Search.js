import React from 'react';
import { Redirect } from 'react-router-dom';

class Search extends React.Component {
  
  state = {
    search: '',
    fireRedirect: false
  }
  
  searchGithub = () => {
    fetch(`https://api.github.com/search/users?q=${this.state.search}`)
      .then( res => res.json() )
      .then( results => this.setState({ results: results.items }) )
      .catch( err => console.log(err) )
  };

  handleSubmit = e => {
    e.preventDefault();
    this.searchGithub();
    this.setState({ fireRedirect: true })
    
  };
  
  
  render() {

    const { from } = window.location.pathname || '/';
    const { fireRedirect } = this.state;
    
    console.log(window.location.pathname)
    return(
      <div>
        <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
          <input 
          className="form-control mr-sm-2" 
          type="text" 
          placeholder="Search Github" 
          aria-label="Search" 
          value={this.state.search} 
          onChange={ search => this.setState({ search: search.target.value }) }
        />
      </form>
      {fireRedirect && (
        <Redirect to={from || '/search/' + this.state.search} />
      )}
    </div>
    )
  }
  
  
}

export default Search;