import axios from 'axios';
import { Suspense, useState, lazy, useEffect } from 'react';
import { getRandomInt } from '../utils/globals';
import questions from '../utils/questions.json';
import { useSpring, animated } from 'react-spring';

// components
const QuestionTab = lazy(() => import('../components/QuestionTab'));
const HintTab = lazy(() => import('../components/Hint'));

const getAnswersForId = (id) => `https://api.stackexchange.com/2.3/questions/${id}/answers?order=desc&sort=activity&filter=withbody&site=stackoverflow`;

const Home = () => {
    const [data, setData] = useState([]);
    const [answerId, setAnswerId] = useState(0);

    const [openTab, setOpenTab] = useState(false);
    // const [openModal, setOpenModal] = useState(false);
    const props = useSpring({ display: openTab ? 'block' : 'none', opacity: openTab ? 1 : 0 })

    const hintClick = () => {
        return setOpenTab((prev) => !prev);
    }

    const chooseNextId = () => {
        let id = questions[getRandomInt(0, questions.length - 1)].questionId;
        setAnswerId(id);
        return id;
        // add to localStorage as we choose to skip the question
    }

    const generateNextQuestion = () => {
        axios.get(getAnswersForId(chooseNextId()))
            .then(function (response) {
                console.log(response)
                getMaxScores(response.data.items);

            })
            .catch(function (error) {
                error.response.status === 400 && setData();
            })
    }

    useEffect(() => {
        generateNextQuestion();
    }, [])

    function getMaxScores(fetchedData) {
        let topAnswersGroup = [];
        if (fetchedData.length === 0) return
        let maxScore = fetchedData?.reduce(function (a, b) {
            if (a.score > b.score) return a;
            return b;
        }, 'No data')
        topAnswersGroup.push(maxScore)
        setData(topAnswersGroup);
    }


    return (
        <Suspense fallback={<div className="bg-indigo-900 min-h-screen flex items-center justify-center text-indigo-100">Wczytywanie...</div>}>
            <div className="bg-gradient-to-r from-slate-800 to-indigo-900 h-100 min-h-screen py-20">
                <div className="container mx-auto">
                    <QuestionTab open={openTab} hintClick={() => hintClick()} nextQuestion={generateNextQuestion} />
                    <animated.div style={props}>
                        {console.log(data)}
                        {data && <HintTab answers={data ?? []} ></HintTab>}
                    </animated.div>
                </div>
            </div>
        </Suspense>
    );
};

export default Home;