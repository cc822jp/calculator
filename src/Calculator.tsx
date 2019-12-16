import React from 'react';
import './Calculator.css';
import Button, {ButtonTypes} from './components/Button'
import Display from './components/Display'

class Calculator extends React.Component<{}> {
  handleClick(label: string) {
    console.log("click", label)
  }

  render() {
    return (
      <div className="Calculator">
        <div className="Calculator__Display">
          <Display />
        </div>
        <div className="Calculator__Panel">
          <Button Label="(" Type={ButtonTypes.Dark} handleClick={this.handleClick}/>
          <Button Label=")" Type={ButtonTypes.Dark} handleClick={this.handleClick}/>
          <Button Label="%" Type={ButtonTypes.Dark} handleClick={this.handleClick}/>
          <Button Label="CE" Type={ButtonTypes.Dark} handleClick={this.handleClick}/>
          <Button Label="7" Type={ButtonTypes.Light} handleClick={this.handleClick}/>
          <Button Label="8" Type={ButtonTypes.Light} handleClick={this.handleClick}/>
          <Button Label="9" Type={ButtonTypes.Light} handleClick={this.handleClick}/>
          <Button Label="+" Type={ButtonTypes.Dark} handleClick={this.handleClick}/>
          <Button Label="4" Type={ButtonTypes.Light} handleClick={this.handleClick}/>
          <Button Label="5" Type={ButtonTypes.Light} handleClick={this.handleClick}/>
          <Button Label="6" Type={ButtonTypes.Light} handleClick={this.handleClick}/>
          <Button Label="×" Type={ButtonTypes.Dark} handleClick={this.handleClick}/>
          <Button Label="1" Type={ButtonTypes.Light} handleClick={this.handleClick}/>
          <Button Label="2" Type={ButtonTypes.Light} handleClick={this.handleClick}/>
          <Button Label="3" Type={ButtonTypes.Light} handleClick={this.handleClick}/>
          <Button Label="−" Type={ButtonTypes.Dark} handleClick={this.handleClick}/>
          <Button Label="0" Type={ButtonTypes.Light} handleClick={this.handleClick}/>
          <Button Label="." Type={ButtonTypes.Light} handleClick={this.handleClick}/>
          <Button Label="=" Type={ButtonTypes.Primary} handleClick={this.handleClick}/>
          <Button Label="+" Type={ButtonTypes.Dark} handleClick={this.handleClick}/>
        </div>
      </div>
    );
  }
}

export default Calculator;
