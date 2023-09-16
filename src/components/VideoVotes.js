import React from "react";

function VideoVotes({upvotes,downvotes,addVotes,removeVotes}){

    return(
        <div>
            <button onClick={addVotes}>{upvotes}{"👍"}</button>
            <button onClick={removeVotes}>{downvotes}{"👎"}</button>
        </div>
        

    )
}

export default VideoVotes;