import AnimateIcon from "../Assets/images/Animation.gif"

const Animation = ()=>{
    return(<div className="fixed inset-0 z-50" style={{backgroundColor:"#D6EADF"}}>
        <div className="flex items-center justify-center">
            <img src={AnimateIcon} className="object-contain h-52" style={{marginTop:"30vh"}}/>
        </div>
    </div>)
}

export default Animation;