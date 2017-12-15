import React from 'react';
import { Header, UserResult } from '../components';

class Results extends React.Component {
  state = {
    search: this.props.match.params.query,
    results: [],
  }
  
  componentDidMount() {
    fetch(`https://api.github.com/search/users?q=${this.state.search}`)
      .then( res => res.json() )
      .then( results => this.setState({ results: results.items }) )
      .catch( err => console.log(err) )
  };
  
  render() {
    return(
      <div>
        <Header />
        <main className="mt-5">
          <div className="container">
            <div className="row">
              {this.state.results.map( user => <UserResult key={user.id} avatar={user.avatar_url} login={user.login} />)}
            </div>
          </div>
        </main>
      </div>
    )
  }
  
}

export default Results;