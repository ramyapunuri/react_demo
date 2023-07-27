import Classes from './Card.module.css'

const Card_Handler = (props) => {
    return (
        <div className={`${Classes.card} ${props.className}`}>
            {props.children}
        </div>
    );
};
export default Card_Handler;