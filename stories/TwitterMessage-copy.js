const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super()

    this.state = {
      value: ' '
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>{this.prop.maxChars}
      </div>
    )
  }
}



module.exports = TwitterMessage
