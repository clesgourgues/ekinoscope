import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import SearchForm from "./components/searchForm";
import Results from "./components/Results";
import Map from "./components/Map";
import Organigram from "./components/Organigram";
import Profile from "./components/Profile";
import "./App.css";

export default class App extends React.Component {
  state = {
    formValues: {
      searchTerm: "",
      searchOption: "user"
    },
    user: []
  };

  reset = () => {
    this.setState({
      formValues: {
        searchTerm: "",
        searchOption: "user"
      }
    });
  };

  handleChange = e => {
    console.log("change of name", e.target.value);
    const searchOption = this.state.formValues.searchOption;
    const searchTerm = e.target.value;
    this.setState({
      formValues: {
        searchTerm,
        searchOption
      }
    });
  };

  handleOptionChange = e => {
    console.log("change of option", e.target.name);
    const searchOption = e.target.name;
    const searchTerm = this.state.formValues.searchTerm;
    this.setState({
      formValues: {
        searchTerm,
        searchOption
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleClickProfile = e => {
    const userId = e.target.id;
    fetch(`/users/${userId}`)
      .then(res => res.json())
      .then(user => {
        this.setState({user: user});
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm
          handleOptionChange={this.handleOptionChange}
          searchTerm={this.state.formValues.searchTerm}
          searchOption={this.state.formValues.searchOption}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          reset={this.reset}
        />
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Results
                  searchTerm={this.state.formValues.searchTerm}
                  searchOption={this.state.formValues.searchOption}
                  clickProfile={this.handleClickProfile}
                />
              )}
            />
            <Route path="/profile/:id" render={() => <Profile user={this.state.user}/>} />
            <Route
              exact
              path="/map"
              render={() => (
                <Map
                  searchTerm={this.state.searchTerm}
                  searchOption={this.state.searchOption}
                />
              )}
            />
            <Route path="/organigram" render={() => <Organigram />} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}
