import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './graphql/client';
import './index.css';

import { GET_AUTHED_USER, UPDATE_AUTHED_USER } from './graphql/state/authUser';
import { AUTHENTICATE_WITH_TOKEN } from './graphql/mutations/auth';
import Query from './components/utils/CustomQuery';

import Navbar from './components/Navbar/';
import Routes from './routes';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authIsLoading: true,
    };
  }
  componentDidMount = () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) this.tryTokenAuthenticate();
    else this.setState({ authIsLoading: false });
  }
  tryTokenAuthenticate = () => {
    client.query({
      query: AUTHENTICATE_WITH_TOKEN,
      fetchPolicy: 'network-only',
    }).then(({ data }) => {
      client.mutate({
        mutation: UPDATE_AUTHED_USER,
        variables: { user: data.me },
      }).then(() => {
        this.setState({ authIsLoading: false });
      });
    }).catch((err) => {
      this.setState({ authIsLoading: false });
    });
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>

          {!this.state.authIsLoading &&
            <Query query={GET_AUTHED_USER}>
              {({ data: { authedUser } }) => (
                <React.Fragment>

                  <Navbar user={authedUser} />

                  <Routes authedUser={authedUser} />

                </React.Fragment>
              )}
            </Query>
          }

        </Router>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
