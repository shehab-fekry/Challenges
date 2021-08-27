import { Component } from "react";
import { BackToHome } from "../App";
import Table from '.././Components/Table/Table.js';
// import axios from 'axios';

/*
  hint: the API takes page and results as query string
  eg: `?page=3&results=10`
*/

class ChallengeTwo extends Component {

  state = {
    usersArray:[],
    page: 1,
  }

  componentDidMount(){
    fetch('https://randomuser.me/api/?seed=dexi-interview?page=1&results=5')
    .then(response => response.json())
    .then(data => {
      this.setState({usersArray: data.results});
    })
    .catch(err => err)
  }

  fetchUsersHandler = () => {
    let newPage = this.state.page + 1;
    this.setState({page: newPage});

    fetch('https://randomuser.me/api/?seed=dexi-interview?page='+ newPage +'&results=5')
    .then(response => response.json())
    .then(data => {
        let usersArray = [
            ...this.state.usersArray,
            ...data.results,
        ];
        this.setState({usersArray: usersArray});
    })
    .catch(err => err)
}

  render()
  {
    return (
      <>
        <BackToHome />
        <h1 className="title is-1 has-text-white">Challenge 2</h1>
        <h2 className="subtitle has-text-grey-lighter">
          Fetch 5 users from the api
          <code>https://randomuser.me/api/?seed=dexi-interview</code> and display
          them in a table.
        </h2>
        <h2 className="subtitle has-text-grey-lighter">
          A <code>table-example.png</code> has been provided for guidance on
          styling.
        </h2>
        <h2 className="subtitle has-text-grey-lighter">
          Pay close attention to empty and loading states
        </h2>
        <h2 className="subtitle has-text-grey-lighter">
          The table should also have a <code>Load More</code> button that fetches
          the next page of the API and appends the results to the existing users.
        </h2>
  
        <Table 
        usersArray={this.state.usersArray}
        clicked={this.fetchUsersHandler}/>
      </>
    );
  }
};

export default ChallengeTwo;
