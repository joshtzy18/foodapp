
import PropTypes from 'prop-types'
import Styles from './container.module.css'
function Container({children}) {
  return (
    <div className={Styles.parentContainer}>{children}</div>
  )
}

Container.propTypes = {
    children: PropTypes.node
}
export default Container