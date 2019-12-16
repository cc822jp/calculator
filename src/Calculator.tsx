import React from 'react';
import './Calculator.css';
import Button, {ButtonTypes} from './components/Button'
import Display from './components/Display'

interface State {
  computation: string,
  result: string
}

class Calculator extends React.Component<{}, State> {
  state: State = {
    computation: '',
    result: ''
  }

  handleClick(label: string) {
    let computation = '', result = '';

    switch (label) {
      case 'CE':
        computation = '';
        result = '';
        break;

      case '=':
        try {
          console.log(this.state.computation);
          computation = this.state.computation
          result = eval(this.state.computation);
        } catch (e) {
          result = 'NaN';
        }
        break;

      default:
        computation = this.state.computation + label;
    }

    this.setState({
      computation: computation,
      result: result
    })
    console.log("click", label, this)
  }

  render() {
    return (
      <div className="Calculator">
        <div className="Calculator__Display">
          <Display Computation={this.state.computation} Result={this.state.result} />
        </div>
        <div className="Calculator__Panel">
          <Button Label="(" Type={ButtonTypes.Dark} handleClick={this.handleClick.bind(this)}/>
          <Button Label=")" Type={ButtonTypes.Dark} handleClick={this.handleClick.bind(this)}/>
          <Button Label="%" Type={ButtonTypes.Dark} handleClick={this.handleClick.bind(this)}/>
          <Button Label="CE" Type={ButtonTypes.Dark} handleClick={this.handleClick.bind(this)}/>
          <Button Label="7" Type={ButtonTypes.Light} handleClick={this.handleClick.bind(this)}/>
          <Button Label="8" Type={ButtonTypes.Light} handleClick={this.handleClick.bind(this)}/>
          <Button Label="9" Type={ButtonTypes.Light} handleClick={this.handleClick.bind(this)}/>
          <Button Label="+" Type={ButtonTypes.Dark} handleClick={this.handleClick.bind(this)}/>
          <Button Label="4" Type={ButtonTypes.Light} handleClick={this.handleClick.bind(this)}/>
          <Button Label="5" Type={ButtonTypes.Light} handleClick={this.handleClick.bind(this)}/>
          <Button Label="6" Type={ButtonTypes.Light} handleClick={this.handleClick.bind(this)}/>
          <Button Label="×" Type={ButtonTypes.Dark} handleClick={this.handleClick.bind(this)}/>
          <Button Label="1" Type={ButtonTypes.Light} handleClick={this.handleClick.bind(this)}/>
          <Button Label="2" Type={ButtonTypes.Light} handleClick={this.handleClick.bind(this)}/>
          <Button Label="3" Type={ButtonTypes.Light} handleClick={this.handleClick.bind(this)}/>
          <Button Label="−" Type={ButtonTypes.Dark} handleClick={this.handleClick.bind(this)}/>
          <Button Label="0" Type={ButtonTypes.Light} handleClick={this.handleClick.bind(this)}/>
          <Button Label="." Type={ButtonTypes.Light} handleClick={this.handleClick.bind(this)}/>
          <Button Label="=" Type={ButtonTypes.Primary} handleClick={this.handleClick.bind(this)}/>
          <Button Label="+" Type={ButtonTypes.Dark} handleClick={this.handleClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default Calculator;
