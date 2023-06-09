export default function Componen({obj}) {

    return(
        <div>
          
            <span>{obj.rating}</span>
            <a href= {obj.url} target="_blank"> <span>{obj.name}</span></a>
        </div>
    )
}