import React, {FormEvent, useState, useEffect} from 'react'
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
    //console.log(params)

    const initialState = {
        title: "",
        description: "",
        url: "",
      };
    
      const [video, setVideo] = useState<Video>(initialState);
    
    const handleInputChange = (e: InputChange) => {
        setVideo({...video, [e.target.name]: e.target.value })
 
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
       e.preventDefault(); 

       if(!params.id){
        await videoService.createVideo(video)
        toast.success('New Video added')
        setVideo(initialState)
       } else{
           await videoService.updateVideo(params.id, video)
       }
       
       history.push('/')
     
    }

    const getVideo = async (id:string) => {
       const res =  await videoService.getVideo(id)
       const {title, description, url} = res.data;
       setVideo({title, description, url})
       console.log(title, url)
    }
    useEffect(() => {
        if (params.id) getVideo(params.id);
        
    }, [])

    return (
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="card">
                    <div className="card body">
                    {
                                    params.id?
                                
                               <h3>Update Video</h3>
                                :
                               <h3>Create Video</h3>
                            
                                }
                        
                        
                        

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" 
                                name="title" 
                                placeholder="Write a title for this video"
                                className="form-control"
                                autoFocus
                                onChange= {handleInputChange}
                                value ={video.title}
                                />
                            </div>

                            <div className="form-group">
                                <input type="text" 
                                name="url" 
                                placeholder="https://somesite.com"
                                className="form-control"
                                onChange= {handleInputChange}
                                value= {video.url}
                            />
                            </div>

                            <div className="form-group">
                                <textarea 
                                name="description" 
                                rows={3} 
                                className="form-control" 
                                placeholder="Write a description"
                                onChange= {handleInputChange}
                                value= {video.description}
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