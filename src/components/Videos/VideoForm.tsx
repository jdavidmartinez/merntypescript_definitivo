import React, {useState} from 'react'
import { Video } from "./Video";

export const VideoForm = () => {

    const [video, setVideo] = useState<Video>({title:"", description:"", url:""})

    //const handleInputChange = (e: any) => {
      //  setVideo()

    //}

    return (
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="card">
                    <div className="card body">
                        <h3>New Video</h3>

                        <form>
                            <div className="form-group">
                            <input type="text" 
                            name="title" 
                            placeholder="Write a title for this video"
                            className="form-control"
                            autoFocus/>
                            </div>

                            <div className="form-group">
                            <input type="text" 
                            name="url" 
                            placeholder="https://somesite.com"
                            className="form-control"
                            />
                            </div>

                            <div className="form-group">
                            <textarea 
                            name="descirption" 
                            rows={3} className="form-control" 
                            placeholder="Write a description"
                            ></textarea>
                            </div>

                            <button className="btn btn-primary">
                                Create Video
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoForm