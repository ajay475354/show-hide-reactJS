import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstButton: false, secondButton: false}

  firstName = () => {
    this.setState(prevState => ({firstButton: !prevState.firstButton}))
  }

  lastName = () => {
    this.setState(prevState => ({secondButton: !prevState.secondButton}))
  }

  render() {
    const {firstButton, secondButton} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button_container">
          <div>
            <button type="button" className="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {firstButton && <p className="name">Joe</p>}
          </div>

          <div>
            <button type="button" className="button" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {secondButton && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
