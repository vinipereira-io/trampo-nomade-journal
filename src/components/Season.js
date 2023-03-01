import IconPin from 'media/icon-pin.png';

function Season(props) {
    return (
        <div className='season'>
            <div className="season--left">
                <img src={props.item.image} className='season--left--image'></img>
            </div>
            <div className="season--right">
                <div className='season--right--top-information'>
                    <img src={IconPin} className='season--right--top-information--pin'></img>
                    <h2 className='season--right--top-information--country'>{props.item.country.toUpperCase()}</h2>
                    <a href={props.item.mapURL} className='season--right--top-information--link'>Google Maps</a>
                </div>
                <h1 className='season--rigth--title'>{props.item.title}</h1>
                <h3 className='season--rigth--period'>{props.item.period}</h3>
                <p className='season--rigth--description'>{props.item.description}</p>
            </div>
        </div>
    )
}

export default Season