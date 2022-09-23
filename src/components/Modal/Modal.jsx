import ReactDOM from 'react-dom';
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

const Modal = ({ children }) => {
    return (
        ReactDOM.createPortal(
            <ModalWrapper>
                <ModalContent className="bg-indigo-800 rounded-xl drop-shadow-2xl">
                    {children}
                </ModalContent>
            </ModalWrapper>, document.querySelector('body'))
    );
};

export default Modal;
