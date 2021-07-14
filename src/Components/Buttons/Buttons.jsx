import './Buttons.css';

export default function Buttons({ start, stop, wait, reset, btnStart }) {

    return (
        <div className='button-container'>
            {(btnStart === true) ?
                <button onClick={start} >Start</button> :
                <button onClick={stop} >Stop</button>}

            <button onDoubleClick={wait} >Wait</button>

            <button onClick={reset}>Reset</button>
        </div>
    );
}