import React, { Component } from 'react';
import BodyParts from './BodyParts';
// import WorkoutCalendar from '/components/WorkoutCalendar'


class App extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1 style={styles.container}>List of Exercises</h1>
                <BodyParts/>
            </div>
        )
    }
}

const styles = {
    container: {
        textAlign: 'center',
        // backgroundColor: '#333652'
    }
}

// const outerStyles = {
//     container: {
//         gridTemplateColumns: 'repeat(4, 1fr)',
//         padding: '1rem 3rem',
//         display: 'grid',
//         gridTemplateRows: '200px 200px 200px 200px'
//     }
// }

// const styles = {
//     container: {
//         gridRowGap: '0.75rem',
//         margin: '0.5rem',
//         border: '1px black solid',
//         // width: '20%',
//         // display: 'flex',
//         // flexDirection: 'column',
//         // alignItems: 'flex-start',
//         // padding: '10px',
//     }
// }

export default App;