import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

// icons
import { ArrowLongRightIcon, HandRaisedIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid'

// components
import Button from '../Button';
import { Hint } from '../Hint';
import { HintContent } from '../Hint'
import Icon from '../Icon'
import Tooltip from '../Tooltip';
import Modal from '../Modal'


const QuestionTab = ({ answers }) => {
    const [openTab, setOpenTab] = useState(false);
    const props = useSpring({ opacity: openTab ? 1 : 0 })

    function hintClick(open) {
        return setOpenTab(open);
    }

    const handleModalOpen = () => {
    }

    return (

        <div className="bg-gradient-to-r from-slate-800 to-indigo-900 h-100 min-screen py-20">
            <div className="container mx-auto">
                <div className="relative drop-shadow-lg md:h-auto bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl px-8 pb-10 pt-40 mt-20">
                    <div className="flex justify-end">
                        <Tooltip text="Mini app made only for practising matters. I picked stackoverflow questions that are asked a lot and made a few references for possible answer.">
                            <Icon component={QuestionMarkCircleIcon} className="mr-4 cursor-pointer" />
                        </Tooltip>
                        <Tooltip text="Spotted a bug ? Report it ! Click to show the form.">
                            <Icon onClick={handleModalOpen} component={HandRaisedIcon} className="cursor-pointer hover:fill-indigo-500" />
                        </Tooltip>
                        <Modal>
                            <p>teeeest</p>
                        </Modal>
                    </div>
                    <h1 className="left-10 -top-16 absolute z-10 text-8xl pl-8 pb-5 tracking-wide text-slate-100 font-bold mb-5">
                        Are you smarter than <span className=" underline decoration-violet-500 hover:decoration-wavy font-thin">stackoverflow</span> ?
                    </h1>
                    <div className="pl-10 pt-5">
                        <p className="text-indigo-400 text-2xl mb-5">Question</p>
                        <p className="text-indigo-100 text-lg mb-10">
                            Given an array [1, 2, 3, 4], how can I find the sum of its elements? (In this case, the sum would be 10.)

                            I thought $.each might be useful, but I'm not sure how to implement it.
                        </p>
                        {/* <button type="button" class="bg-indigo-500 ..." disabled>
                            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                            </svg>
                            Processing...
                        </button> */}
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <Button text="Easy peasy, next !" className={'mr-5'}>
                                    <ArrowLongRightIcon className="text-indigo-900 h-10 ml-2"></ArrowLongRightIcon>
                                </Button>
                                <Hint hintClick={hintClick} />
                            </div>

                            <div className="flex flex-end flex-row justify-end">
                                {['javascript', 'reduce', 'array'].map((item) => <div className="rounded-full text-xs tracking-wide text-indigo-500 border border-indigo-500 inline-block py-2 px-3 ml-2">{item}</div>)}
                            </div>
                        </div>
                    </div>
                </div>
                <animated.div style={props}>
                    <HintContent answers={answers}></HintContent>
                </animated.div>
            </div>
        </div >
    )
};

export default QuestionTab;