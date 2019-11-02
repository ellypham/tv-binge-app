import React from "react";
import Form from "./components/Form";
import ShowDetails from "./components/ShowDetails";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showName: "",
      hours: "",
      showNameError: "",
      hoursError: "",
      tvShowList: [],
      showDetails: {},
      episodeRunTime: null,
      error: null,
      isLoaded: false,
      start: false,
      displayForm: false
    };
  }

  validateInput = () => {
    let showNameError = "";
    let hoursError = "";

    if (!this.state.showName) {
      showNameError = "show name cannot be blank";
    }
    if (!this.state.hours) {
      hoursError = "hours cannot be blank";
    }
    if (isNaN(this.state.hours)) {
      hoursError = "Input needs to be a number";
    }

    if (showNameError || hoursError) {
      this.setState({ showNameError, hoursError });
      return false;
    }

    return true;
  };

  validateTVShow = () => {
    let showNameError = "";
    if (this.state.tvShowList.length < 1) {
      showNameError = "Please make sure show name is spelled correctly";
    }
    if (showNameError) {
      this.setState({ showNameError });
      return false;
    }
    return true;
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const validInputs = this.validateInput();
    if (validInputs) {
      this.searchTVShow(this.state.showName)
        .then(res => res.json())
        .then(data =>
          this.setState({
            tvShowList: data.results,
            isLoaded: true,
            displayForm: false
          })
        )
        .catch(error => this.setState({ error, isLoaded: true }));
    } else {
      return;
    }
  };

  searchTVShow = show => {
    const API_KEY = "eabb58c9fc5eae96730b9785e9043a0f";
    const url = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=${show}&page=1`;
    return fetch(url);
  };

  getTVShowDetails = id => {
    const API_KEY = "eabb58c9fc5eae96730b9785e9043a0f";
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`;
    return fetch(url);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tvShowList !== this.state.tvShowList) {
      const validTVShow = this.validateTVShow();
      if (validTVShow) {
        // add validation if tv id does not exist
        this.getTVShowDetails(this.state.tvShowList[0].id)
          .then(res => res.json())
          .then(data =>
            this.setState({
              showDetails: data,
              episodeRunTime: data.episode_run_time[0]
            })
          );
      }
    }
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth"
    });
  }

  startBinge = () => {
    this.setState({
      start: true,
      displayForm: true
    });
  };

  searchAgain = () => {
    this.setState({
      showName: "",
      hours: "",
      showDetails: ""
    });
  };

  renderHeader = () => {
    return (
      <header>
        <div className="wrapper">
          <div className="header__copy">
            <h1>Can I binge?</h1>
            <p>
              Looking for a show to binge watch? Find out how long it will take
              to binge your TV Season of choice
            </p>
            <button className="button" onClick={this.startBinge}>
              Lets get started!
            </button>
          </div>
        </div>
      </header>
    );
  };

  renderForm = () => {
    return (
      <Form
        showName={this.state.showName}
        hours={this.state.hours}
        showNameError={this.state.showNameError}
        hoursError={this.state.hoursError}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  };

  renderShowDetails = () => {
    return (
      <ShowDetails
        showDetails={this.state.showDetails}
        episodeRunTime={this.state.episodeRunTime}
        hours={this.state.hours}
        error={this.state.error}
        searchAgain={this.searchAgain}
      />
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.state.start === false ? this.renderHeader() : this.renderForm()}
        {this.state.tvShowList.length > 0 && this.state.showDetails
          ? this.renderShowDetails()
          : null}
      </React.Fragment>
    );
  }
}

export default App;
