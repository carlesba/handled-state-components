import {set} from 'immootable'

const defaultProps = {
  buttonVisible: true,
  title: 'title'
}

export default class Value {
  static create (props) {
    return new this(props)
  }

  constructor (p) {
    this.state = p || defaultProps
  }

  getTitle () {
    return this.state.title
  }

  hideButton () {
    return this.update(hideButton)
  }

  showButton () {
    return this.update(showButton)
  }

  update (callback) {
    return Value.create(callback(this.state))
  }

  updateTitle (value) {
    return this.update(updateTitle(value))
  }

  cleanTitle () {
    return this.update(cleanTitle)
  }
}

const hideButton = state => set('buttonVisible', false, state)

const showButton = state => set('buttonVisible', true, state)

const updateTitle = value => state => set('title', value, state)

const cleanTitle = state => set('title', '', state)
