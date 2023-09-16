import React,{useState} from "react"
import VideoVotes from "./VideoVotes"
import CommentList from "./CommentList"
import CommentButton from "./CommentButton"

function VideoDetails({video}){
    const [videoDetails,setVideoDetail] = useState(video)
    const [showComments, setShowComments] = useState(true)

    function addVotes(){
        const newVotes = videoDetails.upvotes +1
        const newDetails = {...videoDetails, upvotes:newVotes}
        setVideoDetail(newDetails)
    }

    function removeVotes(){
        const newVotes = videoDetails.downvotes -1
        const newDetails = {...videoDetails, downvotes:newVotes}
        setVideoDetail(newDetails)
    }

    function hideComments(){
        setShowComments(!showComments)
    }

    return(
        <div>
            <h1>{videoDetails.title}</h1>
            <h3>{videoDetails.views}{" | "}{videoDetails.createdAt}</h3>
            <VideoVotes upvotes={videoDetails.upvotes} downvotes={videoDetails.downvotes} addVotes={addVotes} removeVotes={removeVotes}/>
            <CommentButton hideComments={hideComments} showCommentButton={showComments}/>
            <h2>{videoDetails.comments.length} Comments</h2>
            <CommentList comments={videoDetails.comments} showComments={showComments}/>
        </div>
        
    )
}

export default VideoDetails