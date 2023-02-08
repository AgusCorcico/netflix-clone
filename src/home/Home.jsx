import Featured from '../featured/Featured';
import List from '../list/List';
import Navbar from '../navbar/Navbar';
import './home.scss'

function Home() {
    return (
    <div className="home">
        <Navbar />
        <Featured type='Películas'/>
        <List />
        <List />
        <List />
        <List />
        <List />
    </div>
)};

export default Home;
