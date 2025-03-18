import Title from '../titleComponent/title.jsx'
import Paragraph from '../paragraph/paragraph.jsx'

function introInfo() {
    return (
        <section>
            <div className="apt-info">
                <Title content={''}></Title>
                <Paragraph textAlign={'left'} width={'400px'} margin={'0 0 0 40px'} content={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, earum similique architecto corrupti tempore maxime dignissimos mollitia eius incidunt vero eaque sint rerum. Voluptates modi libero cum laudantium sunt blanditiis'}></Paragraph>
            </div>
            <div className="apt-pic">
                <div className="city">Dar Bouaaza</div>
                <div className="city">Sidi Rahal</div>
                <div className="city">Had Swalem</div>
            </div>
        </section>
    )
}

export default introInfo