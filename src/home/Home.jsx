import Featured from '../featured/Featured';
import Navbar from '../navbar/Navbar';
import './home.scss'

function Home() {
    return (
    <div className="home">
        <Navbar />
        <Featured type='Películas'/>
    </div>
)};

export default Home;
