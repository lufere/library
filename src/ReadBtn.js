function ReadBtn(props){
    let renderClass;
    props.read? renderClass = "read" : renderClass= "notRead";
    return(
        <div
        className = {renderClass}
        onClick = {props.onClick}
        >    
        </div>
    );
}

export default ReadBtn