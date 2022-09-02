import React, { Component } from 'react';
import Exercises from '/components/Exercises'

class BodyParts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            back: [],
            biceps: [],
            triceps: [],
            shoulders: [],
            chest: [],
            legs: [],
            abs: [],
            cardio: [],           
            clickedBack: false,
            clickedBiceps: false,
            clickedTriceps: false,
            clickedShoulders: false,
            clickedChest: false,
            clickedLegs: false,
            clickedAbs: false,
            clickedCardio: false,
            // closedBack: false,
            // closedBiceps: false,
            // closedTriceps: false,
            // closedShoulders: false,
            // closedChest: false,
            // closedLegs: false,
            // closedAbs: false,
        }
        this.backExercises = this.backExercises.bind(this);
        this.bicepExercises = this.bicepExercises.bind(this);
        this.tricepExercises = this.tricepExercises.bind(this);
        this.shoulderExercises = this.shoulderExercises.bind(this);
        this.chestExercises = this.chestExercises.bind(this);
        this.legExercises = this.legExercises.bind(this);
        this.abExercises = this.abExercises.bind(this);
        this.cardioExercises = this.cardioExercises.bind(this);
        this.closedBack = this.closedBack.bind(this);
        this.closedBiceps = this.closedBiceps.bind(this);
        this.closedTriceps = this.closedTriceps.bind(this);
        this.closedShoulders = this.closedShoulders.bind(this);
        this.closedChest = this.closedChest.bind(this);
        this.closedLegs = this.closedLegs.bind(this);
        this.closedAbs = this.closedAbs.bind(this);
        this.closedCardio = this.closedCardio.bind(this);
    }
    backExercises(e) {
        if (!this.state.clickedBack) {
            const exercises = {
                text1: 'lat pulldown',
                text2: 'pull-ups',
                text3: 'machine rows'
            }
            this.setState(prevState => ({
                // taking previous state and accessing bodyParts and concatenating it with exercises (making it an array of objects?)
                back: prevState.back.concat(exercises)
            }))
            // this.setState({bodyParts: exercises})
            this.state.clickedBack = true;
        }
        e.preventDefault();
    }
    bicepExercises(e) {
        if (!this.state.clickedBiceps) {
            const exercises = {
                text1: 'preacher curls',
                text2: 'spider curls',
                text3: 'hammer curls'
            }
            this.setState(prevState => ({
                biceps: prevState.biceps.concat(exercises)
            }))
            this.state.clickedBiceps = true;
        }
        e.preventDefault();
    }
    tricepExercises(e) {
        if (!this.state.clickedTriceps) {
            const exercises = {
                text1: 'skull crushers',
                text2: 'dips',
                text3: 'rope pushdown'
            }
            this.setState(prevState => ({
                triceps: prevState.triceps.concat(exercises)
            }))
            this.state.clickedTriceps = true;
        }
        e.preventDefault();
    }
    shoulderExercises(e) {
        if (!this.state.clickedShoulders) {
            const exercises = {
                text1: 'shrugs',
                text2: 'overhead press',
                text3: 'arnold press'
            }
            this.setState(prevState => ({
                shoulders: prevState.shoulders.concat(exercises)
            }))
            this.state.clickedShoulders = true;
        }
        e.preventDefault();
    }
    chestExercises(e) {
        if (!this.state.clickedChest) {
            const exercises = {
                text1: 'bench press',
                text2: 'incline bench press',
                text3: 'push-ups'
            }
            this.setState(prevState => ({
                chest: prevState.chest.concat(exercises)
            }))
            this.state.clickedChest = true;
        }
        e.preventDefault();
    }
    legExercises(e) {
        if (!this.state.clickedLegs) {
            const exercises = {
                text1: 'squats',
                text2: 'leg extensions',
                text3: 'leg curls'
            }
            this.setState(prevState => ({
                legs: prevState.legs.concat(exercises)
            }))
            this.state.clickedLegs = true;
        }
        e.preventDefault();
    }
    abExercises(e) {
        if (!this.state.clickedAbs) {
            const exercises = {
                text1: 'planks',
                text2: 'crunches',
                text3: 'side planks'
            }
            this.setState(prevState => ({
                abs: prevState.abs.concat(exercises)
            }))
            this.state.clickedAbs = true;
        }
        e.preventDefault();
    }
    cardioExercises(e) {
        if (!this.state.clickedCardio) {
            const exercises = {
                text1: 'treadmill',
                text2: 'stair master',
                text3: 'bicycle machine'
            }
            this.setState(prevState => ({
                cardio: prevState.cardio.concat(exercises)
            }))
            this.state.clickedAbs = true;
        }
        e.preventDefault();
    }
    closedBack(e) {
        this.setState({back: []});
        this.state.clickedBack = false;
        e.preventDefault();
    }
    closedBiceps(e) {
        this.setState({biceps: []});
        this.state.clickedBiceps = false;
        e.preventDefault();
    }
    closedTriceps(e) {
        this.setState({triceps: []});
        this.state.clickedTriceps = false;
        e.preventDefault();
    }
    closedShoulders(e) {
        this.setState({shoulders: []});
        this.state.clickedShoulders = false;
        e.preventDefault();
    }
    closedChest(e) {
        this.setState({chest: []});
        this.state.clickedChest = false;
        e.preventDefault();
    }
    closedLegs(e) {
        this.setState({legs: []});
        this.state.clickedLegs = false;
        e.preventDefault();
    }
    closedAbs(e) {
        this.setState({abs: []});
        this.state.clickedAbs = false;
        e.preventDefault();
    }
    closedCardio(e) {
        this.setState({cardio: []});
        this.state.clickedCardio = false;
        e.preventDefault();
    }
    render () {
        return (
            <div id='bodyparts' style={outerStyles.container}>
                <div className='Back' style={styles.container}>Back
                    <form>
                        <button onClick={this.backExercises}>View Exercises</button>
                        <button style={buttonStyles.container} onClick={this.closedBack}>Close Exercises</button>
                    </form>
                    <Exercises entries={this.state.back}/>
                </div>
                <div className='Biceps' style={styles.container}>Biceps
                    <form>
                        <button onClick={this.bicepExercises}>View Exercises</button>
                        <button style={buttonStyles.container} onClick={this.closedBiceps}>Close Exercises</button>
                    </form>
                    <Exercises entries={this.state.biceps}/>
                </div>
                <div className='Triceps' style={styles.container}>Triceps
                    <form>
                        <button onClick={this.tricepExercises}>View Exercises</button>
                        <button style={buttonStyles.container} onClick={this.closedTriceps}>Close Exercises</button>
                    </form>
                    <Exercises entries={this.state.triceps}/>
                </div>
                <div className='Shoulders' style={styles.container}>Shoulders
                    <form>
                        <button onClick={this.shoulderExercises}>View Exercises</button>
                        <button style={buttonStyles.container} onClick={this.closedShoulders}>Close Exercises</button>
                    </form>
                    <Exercises entries={this.state.shoulders}/>
                </div>
                <div className='Chest' style={styles.container}>Chest
                    <form>
                        <button onClick={this.chestExercises}>View Exercises</button>
                        <button style={buttonStyles.container} onClick={this.closedChest}>Close Exercises</button>
                    </form>
                    <Exercises entries={this.state.chest}/>
                </div>
                <div className='Legs' style={styles.container}>Legs
                    <form>
                        <button onClick={this.legExercises}>View Exercises</button>
                        <button style={buttonStyles.container} onClick={this.closedLegs}>Close Exercises</button>
                    </form>
                    <Exercises entries={this.state.legs}/>
                </div>
                <div className='Abs' style={styles.container}>Abs
                    <form>
                        <button onClick={this.abExercises}>View Exercises</button>
                        <button style={buttonStyles.container} onClick={this.closedAbs}>Close Exercises</button>
                    </form>
                    <Exercises entries={this.state.abs}/>
                </div>
                <div className='Cardio' style={styles.container}>Cardio
                    <form>
                        <button onClick={this.cardioExercises}>View Exercises</button>
                        <button style={buttonStyles.container} onClick={this.closedCardio}>Close Exercises</button>
                    </form>
                    <Exercises entries={this.state.cardio}/>
                </div>
            </div>
        )
    }
}

const outerStyles = {
    container: {
        gridTemplateColumns: 'repeat(4, 1fr)',
        padding: '1rem 3rem',
        display: 'grid',
        gridTemplateRows: '200px 200px 200px 200px',
    }
}

const styles = {
    container: {
        gridRowGap: '0.75rem',
        margin: '0.5rem',
        border: '1px black solid',
        textAlign: 'center'
        // width: '20%',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'flex-start',
        // padding: '10px',
    }
}

const buttonStyles = {
    container: {
        marginLeft: '30px'
    }
}

// const buttonEffects = {
//     container: {
//         display: 'inline-block',
//         outline: '0',
//         cursor: 'pointer',
//         borderRadius: '8px',
//         boxShadow: '0 2px 5px 0 rgb(213 217 217 / 50%)',
//         background: '#FFD814',
//         border: '1px solid #FCD200',
//         fontSize: '13px',
//         height: '31px',
//         padding: '0 11px',
//         textAlign: 'center',
//         fontWeight: '500',
//         color: '#0F1111'
//     }
// }


export default BodyParts;