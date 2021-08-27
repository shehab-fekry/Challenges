import { Component } from "react";
import { BackToHome } from "../App";


class ChallengeOne extends Component {

  state = {
    array1: [
      ["name", "id", "age", "weight", "job"],
      ["Mohammed", "3", "20", "120", "developer"],
      ["John", "1", "21", "150", "designer"],
      ["Ali", "2", "23", "90", "doctor"],
      ["Mariam", "4", "20", "100", "lawyer"]
    ],

    array2: [
      ["name", "id", "height"],
      ["Ali", "2", "50"],
      ["John", "1", "45"],
      ["Mariam", "4", "43"],
      ["Mohammed", "3", "48"],
      ["Tony", "5", "96"]
    ],

    array3: [
      ["name", "id", "parent"],
      ["Ali", "2", "yes"],
      ["John", "1", "yes"],
      ["Tony", "5", "yes"]
    ],

    array4: [
      ["name", "id", "hobby"],
      ["Mariam", "4", "video games"],
      ["Ali", "2", "kickboxing"],
      ["Tony", "5", "football"]
    ],

    array5: [
      ["id", "status"],
      ["1", "active"],
      ["2", "inactive"],
      ["3", "active"],
      ["4", "active"],
      ["5", "active"]
    ],
  }
  
  /* 
    Combine the arrays into one table. 
    You may find console.table()
    useful for monitoring your progress
    You may not install any external libraries.
  */

  // 3
  mergeObjectHandler = (arrayOfObjects) => {

    const merged = arrayOfObjects.reduce((merged, obj) => {

      Object.entries(obj).forEach(([id, rowObj]) => {
        if (merged[id]) {
          merged[id] = {...merged[id], ...rowObj}
        } else {
          merged[id] = rowObj
        }
      })
      return merged
    }, {})

    console.table(merged);
  }

  // 2
  toObject = (arrayOfArrays) => {
    let ArrayOfObjects = [];
    
    arrayOfArrays.forEach( array => {
      let object = {};
      for(let i=1; i<array.length; i++) {
        let row = {};
        for(let j=0; j<array[i].length; j++)
        {
          let key = array[0][j];
          let element = array[i][j];
          row[key] = element;
        }
        object[row.id] = row;
      }
      ArrayOfObjects.push(object);
    })
    this.mergeObjectHandler(ArrayOfObjects);
  }

  // 1
  mergArrayHandler = (...args) => {
    const arrayOfArrays = [];
    args.forEach( arg => arrayOfArrays.push(arg))

    this.toObject(arrayOfArrays);
  }

  render(){
    this.mergArrayHandler(
      this.state.array1, 
      this.state.array2, 
      this.state.array3, 
      this.state.array4, 
      this.state.array5
      );
  
    return (
      <>
        <BackToHome />
        <h1 className="title is-1 has-text-white">Challenge 1</h1>
        <h2 className="subtitle has-text-grey-lighter">
          Inside <code>/tasks/one.js</code> you will find a set of arrays. Merge
          them into one array.
        </h2>
        <h2 className="subtitle has-text-grey-lighter">
          You may not install any additional libraries.
        </h2>

        <h1>Solution... have a look at the console!</h1>
      </>
    );
  }
};

export default ChallengeOne;
