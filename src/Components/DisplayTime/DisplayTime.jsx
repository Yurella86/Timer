import './DisplayTime.css';

export default function DisplayTime({ seconds, minutes, hour }) {
    return (
        <div className='timer'>
            {hour < 10 ? '0' + hour : hour}:
            {minutes < 10 ? '0' + minutes : minutes}:
            {seconds < 10 ? '0' + seconds : seconds}
        </div>
    );
}