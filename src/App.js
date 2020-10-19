import React, { Component } from 'react';
import Welcome from './components/welcome';
import Personal from './components/personal-details';
import Education from './components/education-details';
import Work from './components/work-experience';
import Cv from './components/cv-page';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomePage: true,
      personalDetails: false,
      educationDetails: false,
      workExperience: false,
      cvPage: false,
    };
  }

  switchPersonalDetails = () => {
    this.setState({ welcomePage: false, personalDetails: true });
  };

  handlePersonals = (e) => {
    this.setState({
      personalDetails: false,
      educationDetails: true,
      enteredDetails: {
        name: e.target.enterName.value,
        email: e.target.enterEmail.value,
        number: e.target.enterNumber.value,
      },
    });
  };

  handleEducation = (e) => {
    this.setState({
      educationDetails: false,
      workExperience: true,
      education: {
        qualification: e.target.enterQualification.value,
        school: e.target.enterSchool.value,
        fromDate: e.target.fromDate.value,
        toDate: e.target.toDate.value,
      },
    });
  };

  handleWork = (e) => {
    this.setState({
      workExperience: false,
      cvPage: true,
      work: {
        position: e.target.enterJobPosition.value,
        company: e.target.enterCompany.value,
        fromDate: e.target.fromDate.value,
        toDate: e.target.toDate.value,
      },
    });
  };

  render() {
    if (this.state.welcomePage) {
      return <Welcome onWelcome={this.switchPersonalDetails} />;
    } else if (this.state.personalDetails) {
      return <Personal onSubmit={this.handlePersonals} />;
    } else if (this.state.educationDetails) {
      return <Education onSubmit={this.handleEducation} />;
    } else if (this.state.workExperience) {
      return <Work onSubmit={this.handleWork} />;
    } else if (this.state.cvPage) {
      return <Cv {...this.state} />;
    }
  }
}

export default App;
