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
            <div className="flex flex-wrap">
                <div className="pt-10 pb-14 px-10 flex-1">
                    {answers && (
                        answers.map((item) => <><AnswerBody className={'text-slate-300'}>{parse(item?.body ?? '', { trim: true })}</AnswerBody>
                            <div className="pt-4 inline-flex border-t border-indigo-100/10 mt-6 pr-6">
                                <p className="mr-6 text-indigo-50">Author: {item.owner.display_name}</p>
                                <a className="mr-6" href={item.owner.link} target="_blank" rel="noreferrer">Link to profile</a>
                                <a href={`https://stackoverflow.com/a/${item.answer_id}`} target="_blank" rel="noreferrer">Link to answer</a>
                            </div>
                        </>
                        ))}
                </div>
                <div className="border-l border-indigo-500 pt-10 pb-10 px-10 flex flex-col items-end">
                    <h5 className="text-indigo-300 mb-5">Żródła pomocniczne</h5>
                    <Button text={'developer.mozilla - API'}></Button>
                </div>
            </div>
        </div>
    )
}

export { HintContent };
