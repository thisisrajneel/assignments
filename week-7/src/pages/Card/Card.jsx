import './Card.css'

const Card = () => {
    return (
        <div className='cardBody'>
            <div className="imgHolder">
                <img src="/src/pages/Card/assets/kash.jpeg" height={150} alt="" />
            </div>
            <h3 className='name'>Kash Patel</h3>
            <p className='description'>
            Kashyap Pramod Vinod Patel (born February 25, 1980) is an American lawyer, former
            federal prosecutor and official, and conspiracy theorist. He served as a National Security
            Council official, chief of staff to the acting U.S. secretary of defense, and senior advisor
            to the acting director of national intelligence, all during the first presidency of Donald Trump.
            In November 2024, President-elect Trump nominated Patel to succeed Christopher Wray as director
            of the Federal Bureau of Investigation.
            </p>
            <hr />
            <div className='socials'>
                <div className='stat'>1</div>
                <div className='stat'>80K</div>
                <div className='stat'>750</div>
            </div>
        </div>
    )
}

export default Card