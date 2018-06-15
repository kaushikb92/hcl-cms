import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavigationBar/NavigationBar';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
