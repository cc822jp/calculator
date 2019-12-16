import React from 'react'
import './Calculator.css'
import Button, { ButtonTypes as Types } from './components/Button'
import Display from './components/Display'

interface Props {}

interface State {
  // 計算式
  computation: string
  // 表示上の計算式
  displayComputation: string
  // 結果
  result: string
}

class Calculator extends React.Component<Props, State> {
  state: State = {
    computation: '',
    displayComputation: '',
    result: ''
  }

  handleClick(label: string, value: string) {
    let computation = '',
      displayComputation = '',
      result = ''

    switch (label) {
      // リセットの場合
      case 'AC':
        computation = ''
        displayComputation = ''
        result = ''
        break

      // イコールの場合
      case '=':
        try {
          computation = this.state.computation
          displayComputation = this.state.displayComputation
          /* eslint-disable no-eval */
          result = eval(this.state.computation)
          /* eslint-enable no-eval */
        } catch (e) {
          result = 'NaN'
        }
        break

      default:
        computation = this.state.computation + value
        displayComputation = this.state.displayComputation + label
    }

    this.setState({
      computation: computation,
      displayComputation: displayComputation,
      result: result
    })
  }

  constructor(props: Props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return (
      <div className="Calculator">
        <div className="Calculator__Display">
          <Display
            Computation={this.state.displayComputation}
            Result={this.state.result}
          />
        </div>
        <div className="Calculator__Panel">
          <Button
            label="("
            value="("
            type={Types.Dark}
            onClick={this.handleClick}
          />
          <Button
            label=")"
            value=")"
            type={Types.Dark}
            onClick={this.handleClick}
          />
          <Button
            label="%"
            value="*0.01"
            type={Types.Dark}
            onClick={this.handleClick}
          />
          <Button
            label="AC"
            value="AC"
            type={Types.Dark}
            onClick={this.handleClick}
          />
          <Button
            label="7"
            value="7"
            type={Types.Light}
            onClick={this.handleClick}
          />
          <Button
            label="8"
            value="8"
            type={Types.Light}
            onClick={this.handleClick}
          />
          <Button
            label="9"
            value="9"
            type={Types.Light}
            onClick={this.handleClick}
          />
          <Button
            label="÷"
            value="/"
            type={Types.Dark}
            onClick={this.handleClick}
          />
          <Button
            label="4"
            value="4"
            type={Types.Light}
            onClick={this.handleClick}
          />
          <Button
            label="5"
            value="5"
            type={Types.Light}
            onClick={this.handleClick}
          />
          <Button
            label="6"
            value="6"
            type={Types.Light}
            onClick={this.handleClick}
          />
          <Button
            label="×"
            value="*"
            type={Types.Dark}
            onClick={this.handleClick}
          />
          <Button
            label="1"
            value="1"
            type={Types.Light}
            onClick={this.handleClick}
          />
          <Button
            label="2"
            value="2"
            type={Types.Light}
            onClick={this.handleClick}
          />
          <Button
            label="3"
            value="3"
            type={Types.Light}
            onClick={this.handleClick}
          />
          <Button
            label="-"
            value="-"
            type={Types.Dark}
            onClick={this.handleClick}
          />
          <Button
            label="0"
            value="0"
            type={Types.Light}
            onClick={this.handleClick}
          />
          <Button
            label="."
            value="."
            type={Types.Light}
            onClick={this.handleClick}
          />
          <Button
            label="="
            value="="
            type={Types.Primary}
            onClick={this.handleClick}
          />
          <Button
            label="+"
            value="+"
            type={Types.Dark}
            onClick={this.handleClick}
          />
        </div>
      </div>
    )
  }
}

export default Calculator
