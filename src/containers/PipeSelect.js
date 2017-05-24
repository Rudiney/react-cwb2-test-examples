import { connect } from 'react-redux'
import { loadPipes } from '../actions'
import CustomSelect from '../components/CustomSelect'

const reducePipe = (pipes) => {
  if (!pipes) { return {} }
  return Object.values(pipes).reduce((r, pipe) => {
    r[pipe.id] = pipe.name
    return r
  }, {})
}

const mapStateToProps = (state) => ({
  options: reducePipe(state.pipes)
})

const mapDispatchToProps = (dispatch) => ({
  onOpen: () => {
    dispatch(loadPipes())
  }
})

const EventSelect = connect(mapStateToProps, mapDispatchToProps)(CustomSelect)
export default EventSelect
