import "./Button.css"
function Button({disabled, classNameButton, onClickEvent, onChangeEvent, buttonTitle, type}) {
    return (
        <button
            type={type}
            disabled={disabled}
            className={classNameButton}
            onClick={onClickEvent}
            onChange={onChangeEvent}
        >
            {buttonTitle}
        </button>
    )
}

export default Button;