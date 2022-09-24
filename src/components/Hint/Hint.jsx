import { useEffect, useState } from 'react';
import { PuzzlePieceIcon } from '@heroicons/react/24/outline'
import Tooltip from '../Tooltip';
import Icon from '../Icon'

const Hint = ({ hintClick, open }) => {
    // const [open, setOpen] = useState(false);

    // const hintClick = () => {
    //     console.log('clicked !');
    //     // setOpen((prev) => !prev);
    // }
    // useEffect(() => {
    //     hintClick(open);
    //     // console.log(open);
    // }, [open])

    return (
        <div className='h-full flex items-center justify-center px-2 py-2 border border-indigo-500 rounded-full' onClick={hintClick}>
            <Tooltip text="Need a hint? Click to show some help">
                <span className="absolute -right-2 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
                </span>
                <Icon component={PuzzlePieceIcon} className={`cursor-pointer h-8 w-8 hover:fill-indigo-500 hover:stroke-indigo-500 ${open && 'fill-indigo-500'}`} />
            </Tooltip>
        </div>
    )
}

export { Hint };