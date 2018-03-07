import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Header from './components/Header';
import SearchForm from './components/searchForm';
import Results from './components/Results';
import Map from './components/Map';
import Organigram from './components/Organigram';
import './App.css';

export default class App extends React.Component {
  state = {
    formValues: {
      searchTerm: '',
      searchOption: 'user'
    }
  };

  reset = () => {
    this.setState({
      formValues: {
        searchTerm: '',
        searchOption: 'user'
      }
    })
  }

  handleChange = (e) => {
    const searchOption = this.state.formValues.searchOption
    const searchTerm = e.target.value
    this.setState({
      formValues: {
        searchTerm,
        searchOption
      }
    })
  }

  handleOptionChange = (e) => {
    const searchOption = e.target.value
    const searchTerm = this.state.formValues.searchTerm
    this.setState({
      formValues: {
        searchTerm,
        searchOption
      }
    }) 
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm handleOptionChange={this.handleOptionChange} searchTerm={this.state.formValues.searchTerm} searchOption={this.state.formValues.searchOption} onChange={this.handleChange} onSubmit={this.handleSubmit} reset={this.reset} />
        <div>
          <Switch>
            <Route exact path='/' render={() =>
              <Results searchTerm={this.state.formValues.searchTerm} searchOption={this.state.formValues.searchOption} />} />
            <Route exact path='/map' render={() =>
              <Map searchTerm={this.state.searchTerm} searchOption={this.state.searchOption} />} />
            <Route path="/organigram" render={() =>
              <Organigram />} />
            <Redirect from='*' to='/' />
          </Switch>
        </div>
      </div>
    )
  };
}



