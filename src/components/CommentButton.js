import React from "react";

function CommentButton({hideComments, showCommentButton}){
    if(showCommentButton){
        return(
            <button onClick={hideComments}>Hide Comments</button>
        )
    }
    else{
        return(
            <button onClick={hideComments}>Show Comments</button>
        )
    }
    
}

export default CommentButton;