import React from 'react'
import Value from './value'

class Header extends React.Component {
  state = {
    value: Value.create()
  }

  componentWillReceiveProps (nProps) {
    this.setState({value: nProps.value})
  }

  render () {
    const {value} = this.state
    const {handleChangeTitle} = this.props
    return (
      <div>
        <h1>header</h1>
        <input
          type='text'
          value={value.getTitle()}
          onChange={(evt) => {
            if (handleChangeTitle) return handleChangeTitle(evt.target.value)

            this.setState({
              value: value.updateTitle(evt.target.value)
            })
          }}
          />
      </div>
    )
  }
}

export default Header