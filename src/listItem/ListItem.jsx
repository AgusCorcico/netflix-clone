import './listitem.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

function ListItem() {
    return (
    <div className="listItem">
        <img src="https://i.eurosport.com/2022/12/19/3511011-71567388-2560-1440.jpg" alt="" />
        <div className="itenInfo">
            <div className="icons">
                <PlayArrowIcon />
                <AddIcon />
                <ThumbUpOffAltIcon/>
                <ThumbDownOffAltIcon />
            </div>
        </div>
    </div>
)};

export default ListItem;