import './featured.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Featured({type}) {
    return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === 'Películas' ? 'Películas' : 'Series'}</span>
                <select name="gente" id="genre">
                    <option>Género</option>
                    <option value="adventure">Acción</option>
                    <option value="animation">Animadas</option>
                    <option value="comedy">Comedia</option>
                    <option value="crime">Crimen</option>
                    <option value="horror">Deportes</option>
                    <option value="documentary">Documentales</option>
                    <option value="drama">Dramas</option>
                    <option value="fantasy">Fantasia</option>
                    <option value="historical">Policiales</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Terror</option>
                    <option value="western">Western</option>
                </select>
            </div>
        )}
        <img 
            src="https://www.justwatch.com/images/poster/240786930/s332/temporada-6" 
            alt="" 
        />
        <div className="info">
            <img 
                src="https://1.bp.blogspot.com/-qDezmm0ZwaM/UkVcsGmu9NI/AAAAAAAAEVc/yV1HGZbZ-Io/s1600/Breaking_Bad.jpg" 
                alt="" 
            />
            <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum distinctio libero maiores molestiae totam doloremque reiciendis provident soluta, amet assumenda in quibusdam adipisci. Consectetur tenetur expedita beatae debitis assumenda facere.</span>
            <div className="buttons">
                <button className="play">
                    <PlayArrowIcon/>
                    <span>Reproducir</span>
                </button>
                <button className="moreInfo">
                    <InfoOutlinedIcon/>
                    <span>Más información</span>
                </button>
            </div>
        </div>
    </div>
)};

export default Featured;
