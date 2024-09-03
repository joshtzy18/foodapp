import PropTypes from 'prop-types'
import Styles from './InnerContainer.module.css'
function InnerContainer({children}) {
  return (
    <div className={Styles.innerContainer}>{children}</div>
  )
}
InnerContainer.propTypes = {
    children: PropTypes.node
}
export default InnerContainer