import React, {FormEvent, useState} from 'react'
import { ChangeEvent } from 'react';
import { Video } from "./Video";
import * as videoService from './VideoService';
import {toast} from 'react-toastify';
import {useHistory, useParams} from 'react-router-dom';

type InputChange =  ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

interface Params {
    id: string;
}

export const VideoForm = () => {

    const history = useHistory();
    const params = useParams<Params>();
    console.log(params)

    const [video, setVideo] = useState<Video>({
        title:"", 
        description:"",
        url:"",
    })

    const handleInputChange = (e: InputChange) => {
        setVideo({...video, [e.target.name]: e.target.value })
 
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
       e.preventDefault(); 
       const res = await videoService.createVideo(video)
       toast.success('New Video added')
       history.push('/')
       console.log(res)
    }
    return (
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="card">
                    <div className="card body">
                        <h3>New Video</h3>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" 
                                name="title" 
                                placeholder="Write a title for this video"
                                className="form-control"
                                onChange= {handleInputChange}
                                autoFocus/>
                            </div>

                            <div className="form-group">
                                <input type="text" 
                                name="url" 
                                placeholder="https://somesite.com"
                                className="form-control"
                                onChange= {handleInputChange}
                            />
                            </div>

                            <div className="form-group">
                                <textarea 
                                name="description" 
                                rows={3} 
                                className="form-control" 
                                placeholder="Write a description"
                                onChange= {handleInputChange}
                                ></textarea>
                            </div>
                                {
                                    params.id?
                                <button className="btn btn-info">
                                Update Video
                                </button>
                                :
                                <button className="btn btn-primary">
                                 Create Video
                            </button>
                                }
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoForm