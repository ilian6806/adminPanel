
const types = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'ark'
];

const Button = props => {

    let className = ['btn', 'ml-1', 'mr-1'];

    if (props.sm) {
        className.push('btn-sm');
    }

    let btnType = null;
    types.forEach(type => {
        if (props[type]) {
            btnType = type;
        }
    });
    className.push(btnType ? 'btn-' + btnType : 'btn-primary');

    return (
        <button className={className.join(' ')} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;