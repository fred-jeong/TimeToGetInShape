import React, { Component } from 'react';
import FlipMove from "react-flip-move";

class Exercises extends Component {
    constructor(props) {
        super(props)
    }
    createExercises(exercise) {
        return <div>
          <li style={styles.container}><input type='checkbox'/>{exercise.text1}</li>
          <li style={styles.container}><input type='checkbox'/>{exercise.text2}</li>
          <li style={styles.container}><input type='checkbox'/>{exercise.text3}</li>
        </div>
    }
    render () {
        let todoEntries = this.props.entries;
        // console.log(todoEntries)
        let listItems = todoEntries.map(this.createExercises);
        // console.log(listItems)
        return (
          <div>
            <ul className="theList">
              <FlipMove duration={250} easing="ease-out">
                {listItems}
              </FlipMove>
              <form>
                <button style={buttonStyles.container}>Add Exercise(s) to Calendar!</button>
              </form>
            </ul>
          </div>
        )
    }
}

const styles = {
  container: {
    listStyleType: 'none',
    textAlign: 'left'
  }
}

const buttonStyles = {
  container: {
    textAlign: 'center',
    marginLeft: '-40px',
    marginTop: '30px'
  }
}

export default Exercises;