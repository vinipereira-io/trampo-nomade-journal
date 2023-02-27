import IconPin from 'media/icon-pin.png';
import Sydney from 'media/trampo-sydney.jpg';

function Season() {
    return (
        <div className='season'>
            <div className="season--left">
                <img src={Sydney} className='season--left--image'></img>
            </div>
            <div className="season--right">
                <div className='season--right--top-information'>
                    <img src={IconPin} className='season--right--top-information--pin'></img>
                    <h2 className='season--right--top-information--country'>AUSTRALIA</h2>
                    <a className='season--right--top-information--link'>View on Google Maps</a>
                </div>
                <h1>Sydney</h1>
                <h3>03 Fev, 2023 - Atual</h3>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}

export default Season