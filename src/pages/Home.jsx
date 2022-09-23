import axios from 'axios';
import { Suspense, useState, lazy, useEffect } from 'react';

import questions from '../utils/questions.json';

const QuestionTab = lazy(() => import('../components/QuestionTab'));
const getAnswersForId = (id) => `https://api.stackexchange.com/2.3/questions/${id}/answers?order=desc&sort=activity&filter=withbody&site=stackoverflow`;


const Home = () => {
    const [data, setData] = useState([]);
    // https://api.stackexchange.com/2.3/answers?order=desc&sort=activity&site=stackoverflow

    // function chooseRandomQuestion = (list) => {
    //     list.map(()=>Math.random())
    // }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min)
    }


    useEffect(() => {
        let id = questions[getRandomInt(0, questions.length - 1)].questionId;
        axios.get(getAnswersForId(id))
            .then(function (response) {
                console.log(response)
                getMaxScores(response.data.items);

            })
            .catch(function (error) {
                error.response.status === 400 && setData(questions);
            })

    }, [])

    function getMaxScores(fetchedData) {
        let topAnswersGroup = [];
        let maxScore = fetchedData?.reduce(function (a, b) {
            if (a.score > b.score) return a;
            return b;
        }, 'No data')
        console.log(fetchedData, topAnswersGroup);
        topAnswersGroup.push(maxScore)
        setData(topAnswersGroup);
    }


    return (
        <Suspense fallback={<div className="bg-indigo-900 text-indigo-100">Wczytywanie...</div>}>
            <QuestionTab answers={data ?? []} />
        </Suspense>
    );
};

export default Home;