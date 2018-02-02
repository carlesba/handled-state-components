import React, {Component} from 'react'
import {Header, Value as HeaderValue} from './header'
import styled from 'styled-components'

const Module = styled.div`
  border: 1px solid #333;
  border-color: ${p => p.color || 'inherit'};
  padding: 1em;
`

class App extends Component {
  state = {
    header: HeaderValue.create()
  }
  render() {
    return (
      <div>
        <Module>
          <Header
            value={this.state.header}
            handleChangeTitle={(value) => {
              if (value.length > 10) return
              this.setState({
                header: this.state.header.updateTitle(value)
              })
            }}
          />
        </Module>
        <Module>
          <input
            type='text'
            value={this.state.header.getTitle()}
            onChange={evt => {
              this.setState({
                header: this.state.header.updateTitle(evt.target.value)
              })
            }}
          />
        </Module>
      </div>
    )
  }
}

export default App
