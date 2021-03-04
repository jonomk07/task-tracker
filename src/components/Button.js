import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {

    return  (
        <button 
        onClick={onClick}
        className='btn'
        style={{ backgroundColor: color}}>
        {text}
        </button>
    ) 
}

// default props 
Button.defaultProps = {
    color: 'steelblue',
}

//   prop-types
  Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func, //cause it a function
  }

export default Button
