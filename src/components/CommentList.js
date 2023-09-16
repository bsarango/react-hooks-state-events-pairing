import React from "react";

function CommentList({comments, showComments}){

    const displayComments = comments.map((comment)=>{
        return (
            <div key={comment.id}>
                <h3>{comment.user}</h3>
                <h4>{comment.comment}</h4>
            </div>
        )
    })

    if(showComments){
        return(
            <div>
                {displayComments}
            </div>
        )
    }

    else{
        return <div></div>
    }
}

export default CommentList