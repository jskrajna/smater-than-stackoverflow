import { useState } from 'react';

const TooltipBubble = ({ text, show }) => {
    return (
        <div className={`tooltip-default ${show ? 'block' : 'hidden'}`}>{text}</div>
    )
}
const Tooltip = ({ children, text = '' }) => {
    const [show, setShow] = useState(false);
    const handleHover = () => {
        setShow(true);
    }

    return (
        <div className="relative inline-flex" onMouseEnter={handleHover} onMouseLeave={() => setShow(false)}>
            <TooltipBubble show={show} text={text}></TooltipBubble>
            {children}
        </div>
    )
};

export default Tooltip;