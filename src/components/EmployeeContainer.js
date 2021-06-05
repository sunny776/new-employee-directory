import API from "../utilities/API";
import { Component } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Results from "./Results";
import Search from "./search";

class EmployeeContainer extends Component {
  state = {
    search: "",
    results: [],
    queryResults: [],
  };

  componentDidMount() {
    this.userInitialize();
  }

  userInitialize = () => {
    API.getUsers()
      .then((res) => {
        console.log("res", res.data);
        let partialResults = res.data.results;
        partialResults = partialResults.map((item) => ({
          id: item.id.value,
          picture: item.picture.medium,
          firstName: item.name.first,
          lastName: item.name.last,
          city: item.location.city,
          state: item.location.state,
          email: item.email,
          homePhone: item.phone,
          cellPhone: item.cell,
          userName: item.login.username,
        }));
        this.setState({ results: partialResults });
        this.setState({ queryResults: partialResults });
      })
      .catch((err) => console.log(err));
  };

  searchEmployees = search => {
    const query = search.toLowerCase();
    if(!query){
      this.setState({queryResults:this.state.results})
    }else {
      let partialResults = this.state.results;

      partialResults = partialResults.filter(item => item.firstName.toLowerCase().includes(query));

      if( partialResults.length === 0){
          partialResults = this.state.results.filter(item => item.cellPhone.includes(query))
      }
      this.setState({queryResults: partialResults})
    }
  }

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      search:value
    }, () => {
      this.searchEmployees(this.state.search);
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Search 
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <Results results={this.state.queryResults} />
      </div>
    );
  }
}

export default EmployeeContainer;
