import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from 'react-loaders';
import './HomePage.css';
import 'react-notifications/lib/notifications.css';
import axios from 'axios';
import lib, { NotificationContainer, NotificationManager } from 'react-notifications';
import HomeReducer from '../reducers/HomeReducer';
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        about: false,
        features: false,
        terms: false,
        specialconsider: false,
        type_fund: 'open',
        type: 'equity',
        company: 'hdfc',
        listOfFiles: [],
        shouldDisplayMessage: false,
        linkPath: '',
        link1: '',
        showErrorMsg: false
      };
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log('Button is clicked');
    let searchText = this.state.type_fund + '_' + this.state.type + '_' + this.state.company.toLowerCase();
    const {about, features, terms, specialconsider} = this.state;
    let formData = {searchText, about, features, terms, specialconsider};
    if(!features && !about && !terms && !specialconsider) {
      this.setState({showErrorMsg: true});
    } else {
      this.setState({showErrorMsg: false});
      axios.post('http://localhost:8080/download', formData)
      .then((response) => {
        debugger;
        console.log(response);
        this.setState({
          linkPath: response.data,
        });
        if (!response.data.length) {
          this.setState({
            shouldDisplayMessage: true,
          });
        } else {
          this.setState({
            shouldDisplayMessage: false,
            listOfFiles: response.data,
          });
          console.log(this.state.listOfFiles);
        }
      });
    }
    
  };

  handleInput = (val) =>(event)=> {
    this.setState({[val]: event.target.value});
  };
  handleInputTypeFund(event){
    event.preventDefault();
  };
  handleCheckboxes = (val) =>(event)=> {
    this.setState(prevState => ({
      [val]: !prevState[val],
    }));
  };

  render() {
    let reducer =  this.props.HomeReducer;
    let hello = "http://localhost:8080/downloadFilePPT?link="+this.state.linkPath;
    return (
          <div className='container'>
            <h2>Search Pitch Books:</h2>
            <form  name="myform" id="myForm" onSubmit={this.handleClick}>
                {/* DropDown for filters */}
              <div className="form-group">
                <label>Type Of Fund:</label>
                <input className="form-control" id="type_fund" value={this.state.type_fund} disabled />
              </div>

              <div className="form-group">
                <label>Type:</label>
                <input className="form-control" id="type" value={this.state.type} disabled />
              </div>

              <div className="form-group">
                <label>Product:</label>
                <select onChange={this.handleInput('company')} className="form-control" id="company" value={this.state.company}>
                  <option>HDFC</option>
                  <option>ICICI</option>
                  <option>Franklin</option>
                  <option>DSP Rock</option>
                </select>
              </div>

              <div className="chkbox-container">
                <label>Select Content Type:</label>
                <div className="checkbox">
                  <label><input onClick={this.handleCheckboxes('about')} type="checkbox" value={this.state.about} id="about" />About</label>
                </div>
                <div className="checkbox">
                  <label><input onClick={this.handleCheckboxes('features')} type="checkbox" value={this.state.features} id="features" />Features</label>
                </div>
                <div className="checkbox">
                  <label><input onClick={this.handleCheckboxes('terms')} type="checkbox" value={this.state.terms} id="terms" />Terms and conditions</label>
                </div>
                <div className="checkbox">
                  <label><input onClick={this.handleCheckboxes('specialconsider')} type="checkbox" value={this.state.specialconsider} id="specialconsider" />Special Considerations</label>
                </div>
                {this.state.showErrorMsg && <p className="error-msg">Select atleast one of the content type.</p>}
              </div>

                <button type="submit" className="btn btn-lg btn-primary">Search</button>                 
            </form>

            <hr/>
            <h3>Search Result:</h3>
            <ul>
              {this.state.linkPath && <a href={hello}> Click here to download the PPT</a>}
            </ul>
              {this.state.shouldDisplayMessage && <p> Sorry there are no results for above search</p> }
          </div>
    );
  }
}

const mapStateToProps = (state, ownState) => {
  return {
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
