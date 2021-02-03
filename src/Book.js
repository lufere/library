import ReadBtn from './ReadBtn';
import DeleteBtn from './DeleteBtn';

const Book = (props) =>{
        let read;
        let defaultBG = "https://cdn.hipwallpaper.com/i/7/96/AKf6Qb.jpg";
        let background;
        props.book.cover? background = props.book.cover: background = defaultBG;
        props.book.read? read = "READ": read = 'NOT READ';
        if(props.search){
            return(
                <div className="aBookWrapper bookSearchWrapper" style={{backgroundImage:`url(${background})`}}>
                <div className="aBook">
                    <p className="title">{props.book.title}</p>
                    <p className="author">{props.book.author}</p>
                    <p className="pages">{props.book.pages + " Pages"}</p>
                    {/* <p className="readBtn">{read}</p> */}
                    <ReadBtn
                        read = {props.book.read}
                        onClick={(e)=>props.readToggle(e)} 
                    />
                    <button
                        className = 'addBtn'
                    >ADD</button>
                </div>
                </div>
            );
        }else{
            return(
                <div className="aBookWrapper" style={{backgroundImage:`url(${background})`}}>
                <div className="aBook">
                    <p className="title">{props.book.title}</p>
                    <p className="author">{props.book.author}</p>
                    <p className="pages">{props.book.pages + " Pages"}</p>
                    {/* <p className="readBtn">{read}</p> */}
                    <ReadBtn
                        read = {props.book.read}
                        onClick={(e)=>props.readToggle(e)} 
                    />
                    {/* <div className="unreadIcon"></div> */}
                    <DeleteBtn
                        onClick={(e) => props.handleDel(e)}
                    />
                </div>
                </div>
            );
        }
}

export default Book