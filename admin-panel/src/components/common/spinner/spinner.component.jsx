
import './spinner-component.scss'

const Spinner = (props) => {
    return (
        <div className={`spinner-container ${ props.inner ? 'spinner-container-inner' : ''}`}>
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </div>
    )
};

export default Spinner;