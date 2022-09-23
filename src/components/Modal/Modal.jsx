import ReactDOM from 'react-dom';
import { useState } from 'react';

// icons
import { XMarkIcon } from '@heroicons/react/24/outline'

// styles
import styled from 'styled-components';

const ModalWrapper = styled.div`
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ModalContent = styled.div`
    width: 50vw;
    min-width: 500px;
    max-width: 100%;
    min-height: 400px;
    padding: 2rem;
`

const Modal = ({ children, contentCustomStyles = '' }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {

    }

    return (
        open && ReactDOM.createPortal(
            <ModalWrapper className="bg-gradient-to-r from-slate-900/[.9] to-indigo-900/[.8]">
                <ModalContent className={`${contentCustomStyles ? contentCustomStyles : 'bg-indigo-900 rounded-xl drop-shadow-2xl text-indigo-100'}`}>
                    <button className="absolute right-8 t-0" onClick={handleClick}>
                        <XMarkIcon className="h-8 w-8 stroke-indigo-100"></XMarkIcon>
                    </button>
                    {children}
                </ModalContent>
            </ModalWrapper>, document.querySelector('body'))
    );
};

export default Modal;
