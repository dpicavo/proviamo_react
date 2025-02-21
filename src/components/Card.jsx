function Card({ title, imgURL, children, isVisited, }) {
    //const visitedLabal = isVisited  ? "*visitata" : "*non visitata"
        return(
            <div className="rounded-md bg-zinc-950">
                <img src={imgURL} alt=""></img>
            <div className="flex flex-col p-4">
            <h2 className="text-2xl text-white font-semibold">{title}</h2>
            <p className="text-gray-400">{children}</p>
            {isVisited && <span> visitata </span>} 
            {!isVisited && <span> non visitata </span> }
                
            </div>
        </div>
        );        
    }

export default Card;