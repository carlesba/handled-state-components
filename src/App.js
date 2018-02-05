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
          <Header />
        </Module>
      </div>
    )
  }
}

export default App
