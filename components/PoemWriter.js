const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      textarea: ''
    };

    this.handleTextarea = this.handleTextarea.bind(this)
    this.validate = this.validate.bind(this)
  }

  validate(){

    let text = this.state.textarea
    let cleanText = text.replace(/  /g ,' ')
    let lines = cleanText.split("\n")


    if (lines.length === 3 && lines[0].split(" ").filter(Boolean).length === 5 && lines[1].split(" ").filter(Boolean).length === 3 && lines[2].split(" ").filter(Boolean).length === 5) {
      console.log("true")
      return true

    } else {
      console.log("false")
      return false
    }
  }

    handleTextarea(event){
      this.setState( {textarea: event.target.value})
    }



  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.textarea} onChange={this.handleTextarea} />


        {this.validate() ? <p></p> : <div id="poem-validation-error" style={{color: 'red'}}>"This poem is not written in the right structure!"</div>}

      </div>
    );
  }
}

module.exports = PoemWriter;
