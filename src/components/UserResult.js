import React from 'react';

class UserResult extends React.Component {

  state = {
    user: '',
  }
  
  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.login}`)
      .then( res => res.json() )
      .then( user => this.setState({ user }) )
      .catch( err => console.log(err) )
  };
  
  render() {
    return(
      <div className="col-12">
        <img className="float-left mr-3" style={{width: 50}} src={this.props.avatar} alt={this.props.login} />
        <h5 className="card-title"><a href={'/user/' + this.props.login}>{this.props.login}</a> {this.state.user.name}</h5>
        <p><i className="fas fa-map-marker-alt"></i> {this.state.user.location}</p>
        <hr />
      </div>
    )
  }
}

export default UserResult;