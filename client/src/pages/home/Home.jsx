import Featured from '../../featured/Featured';
import List from '../../list/List';
import Navbar from '../../navbar/Navbar';
import './home.scss'

function Home({type}) {
    return (
    <div className="home">
        <Navbar />
        <Featured type={type} />
        <List />
        <List />
        <List />
        <List />
        <List />
    </div>
)};

export default Home;
