import { BackToHome } from "../App";
import { Component } from "react";
import Charts from '../Components/Charts/Charts';

/*
  Think about the data you've received, how can we best extract insights
  from this data?

  Feel free to come up with more visualization ideas 
  than the ones required below.
*/
class ChallengeThree extends Component {
  state = {
    usersArray: [],
    gender: {
      male: 0,
      female: 0,
    },
    age: {},
    registeration: {},
  }

  componentDidMount(){
    fetch('https://randomuser.me/api/?seed=dexi-interview?page=1&results=100')
    .then(res => res.json())
    .then( res => {
      //console.log(res.results);
      this.genderHandler(res.results);
      this.ageHandler(res.results);
      this.registrationHandler(res.results);
    })
    .catch(err => err)
  }

  genderHandler = (results) => {
    let male, female;
    male = female = 0;

    results.forEach( user => {
      if(user.gender === 'male') male += 1;
      else if(user.gender === 'female') female += 1;
    })

    this.setState({
      gender:{
      male: male, 
      female: female
      }
    })
  }

  ageHandler = (results) => {
    let age = {};
    age = results.reduce((age, user) =>{
      if(age[user.dob.age]) age[user.dob.age] += 1;
      else age[user.dob.age] = 1;

      return age;
    },{})

    this.setState({age: age});
  }

  registrationHandler = (results) => {
    let registered = {};
    registered = results.reduce((reg, user) => {
      let date = user.registered.date.slice(0,4);
      if(reg[date]) reg[date] += 1;
      else reg[date] = 1;

      return reg;
    },{})

    this.setState({registeration: registered});
  }

  render(){

    return(
      <>
        <BackToHome />
        <h1 className="title is-1 has-text-white">Challenge 3</h1>
        <h2 className="subtitle has-text-grey-lighter">
          Fetch 100 users from the same api as before, and visualize their
          distribution by <code>age</code>, <code>gender</code>,
          <code>country</code>, and <code>registration date</code>.
        </h2>

        <Charts
        gender={this.state.gender}
        age={this.state.age}
        registeration={this.state.registeration}/>
      </>
    );
  }
};

export default ChallengeThree;
