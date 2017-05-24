import React, { Component } from 'react'
import './CustomSelect.css'

export default class CustomSelect extends Component {
  constructor(p) {
    super(p)
    this.state = { isOpen: false }
    this.toggle = this.toggle.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  open() {
    this.props.onOpen && this.props.onOpen()
    this.setState(() => ({ isOpen: true }))
  }

  close() {
    this.setState(() => ({ isOpen: false }))
  }

  toggle() {
    this.state.isOpen ? this.close() : this.open()
  }

  renderOptionsList() {
    if (Object.values(this.props.options).length === 0) {
      return(<ul key='l'><li>Loading...</li></ul>)
    }

    const items = []

    for (const id in this.props.options) {
      items.push(<li key={id} onClick={() => this.props.onChange(id)}>{this.props.options[id]}</li>)
    }

    return (<ul>{items}</ul>)

  }

  render() {
    return (
      <div className='custom-select'>
        <button className='dhdhdhdhddh' onClick={this.toggle}>
          { this.props.value || this.props.placeholder }
        </button>
        { this.state.isOpen && this.renderOptionsList() }
      </div>
    )
  }
}
