export default function Dice(props){
    const style = {
        backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF",
    }
    return (
        <div className="dice" style={style} 
             onClick={()=>props.isClicked(props.id)}>
            <span className="dice--number">{props.value}</span>
        </div>
    )
}