import parse from 'html-react-parser';
import Button from '../Button';
import styled from 'styled-components';

const AnswerBody = styled.div`
    p {
        margin-bottom: 0rem;
        margin-top: 1.5rem;
    }
    code {
        white-space: pre-wrap;
    }
`;


const HintContent = ({ answers = [] }) => {
    return (
        <div className="relative drop-shadow-lg md:h-auto bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl mt-10">
            <div className=""></div>
            <div className="pt-10 pb-10 px-10">
                {answers && (
                    answers.map((item) => <AnswerBody className={'text-slate-300'}>{parse(item?.body ?? '', { trim: true })}</AnswerBody>
                    ))}
            </div>
            <div className="h-full border-b border-indigo-500 pt-10 pb-10 px-10 flex flex-col items-end">
                <h5 className="text-indigo-300 mb-5">Pomocnicze źródła</h5>
                <Button text={'developer.mozilla - API'}></Button>
            </div>
        </div>
    )
}

export { HintContent };
