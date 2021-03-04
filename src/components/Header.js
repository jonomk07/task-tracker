import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

// rafce create boilerplate for a component 
// const Header = () => {
//     return (
//         <header>
//             <h1>Task Tracker</h1>
//         </header>
//     )
// }

// using props to pass parameters on app.js
// const Header = (props) => {
//     return (
//         <header>
//             <h1>{props.title}</h1>
//         </header>
//     )
// }

// clean a bit by destructuring it will give us the same result
const Header = ({ title, onAdd, showAdd }) => {

    const location = useLocation()

    return (
        <header className="header">
            {/* inline style */}
            {/* <h1 style={{ color: 'red', backgroundColor:'black'}}>{title}</h1> */}
            {/* inline style */}
            {/* <h1 style={headingStyle}>{title}</h1> */}
            <h1>{title}</h1>

            {/* you can add the button like below or create a new button component  */}
            {/* <button className='btn'>Add</button> */}
            {/* <Button color='green' text='Add' onClick={onClick}/>
             */}
            {location.pathname === '/' && (
                <Button
                    color={showAdd ? 'red' : 'green'}
                    text={showAdd ? 'Close' : 'Add'}
                    onClick={onAdd}
                />
            )}
        </header>
    )
}
Header.defaultProps ={
    title: 'Task Tracker',
}

Header.propTypes = { 
    title: PropTypes.string.isRequired,
}

// css in JS
// const headingStyle = {
//     color: 'red', 
//     backgroundColor:'black'
// }


export default Header
