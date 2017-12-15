import React from 'react';
import { Header, Language } from '../components';

class Profile extends React.Component {
  
  state = {
    search: this.props.match.params.username || 'dionimercado',
    user: [],
    repos: []
  }
  
  componentDidMount() {
    // fetch(`https://api.github.com/search/users?q=${this.state.search}`)
    fetch(`https://api.github.com/users/${this.state.search}`)
      .then( res => res.json() )
      .then( user => this.setState({ user }) )
      .catch( err => console.log(err) )

    fetch(`https://api.github.com/users/${this.state.search}/repos`)
      .then( res => res.json() )
      .then( repos => this.setState({ repos }) )
      .catch( err => console.log(err) )
      
    
  }
  
  
  render() {
    console.log(this.state.repos);
    return(
      <div>
        <Header />
        <main className="mt-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 col-md-4 col-lg-3">
                <aside>
                  <img className="img-fluid rounded" src={this.state.user.avatar_url} alt={this.state.user.name} />
                  <h3 className="mt-2 mb-4">
                    <span>{this.state.user.name}</span><br />
                    <small>{this.state.user.login}</small>
                  </h3>
                  <p>{this.state.user.bio}</p>
                  <hr />
                  <p className="mb-0"><i className="fas fa-building"></i> {this.state.user.company}</p>
                  <p className="mb-0"><i className="fas fa-map-marker-alt"></i> {this.state.user.location}</p>
                  <p className="mb-0"><i className="fas fa-link"></i> <a href={this.state.user.blog}>{this.state.user.blog}</a></p>
                </aside>
              </div>
              <div className="col-sm-7 col-md-8 col-lg-9">
                <div className="row">
                  {this.state.repos.map( repo => (
                  <div className="col-lg-6">
                    <div className="card mb-4">
                      <div className="card-body">
                        <h4 className="card-title"><a href={repo.html_url}>{repo.name}</a></h4>
                        <p className="card-text">{repo.description}</p>
                        <p>
                          <Language lang={repo.language} />
                          <i className={repo.stargazers_count > 0 ? 'ml-3 fas fa-star' : 'ml-3 far fa-star'}></i> {repo.stargazers_count}
                          <i className="ml-3 fas fa-code-branch"></i> {repo.forks_count}
                        </p>
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
  
}

export default Profile;