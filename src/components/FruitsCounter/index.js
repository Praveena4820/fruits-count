// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatMango = () => {
    this.setState(prevState => ({
      mango: prevState.mango + 1,
    }))
  }

  eatBanana = () => {
    this.setState(prevState => ({
      banana: prevState.banana + 1,
    }))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="container">
        <div className="fruit-container">
          <h1 className="heading">
            Bob ate <span className="count">{mango}</span> Mangoes{' '}
            <span className="count">{banana}</span> Bananas
          </h1>
          <div>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
              alt="Mango"
            />
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="Banana"
            />
          </div>
          <div>
            <button type="button" onClick={this.eatMango} className="button">
              Eat Mango
            </button>
            <button type="button" onClick={this.eatBanana} className="button">
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
