import './Card.css'

export default function Card ( {name, description, interests, github, twitter} ) {
    return (
        <div id="card">
            <h2>
                {name}
            </h2>
            <p>
                {description}
            </p>
            <h3>Interests</h3>
            <ul>
                {interests.map(i => {
                    <li>
                        {i}
                    </li>
                })}
            </ul>
            <button style={{
                marginRight: "5px"
            }}>
                github
            </button>
            <button style={{
                marginLeft: "5px"
            }}>
                twitter
            </button>
        </div>
    )
}