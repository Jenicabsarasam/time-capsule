import React from 'react'
import { useState } from 'react';
import { Accordion,Button,Card } from 'react-bootstrap';
import ImageUploading from 'react-images-uploading';
import './Upload.css'
import './options.css'
import pic from './Images/image.png';
import video from './Images/video-chat.png';
import audio from './Images/sound.png';
import text from './Images/note.png';

const VideoUpload = () => {
    const [images,setImages]=useState([]);
    const maxNumber=50;

    const onChange=(imageList,addUpdateIndex) =>{
        console.log(imageList,addUpdateIndex);
        setImages(imageList);
    };
    
  return (
    <>
      <div>
        <h1 className='text-center'>Welcome !</h1>
        <p>Are you ready to capture the moments...</p>
      </div>
      <div className='d-flex justify-content-between m-3'>
        <div>
            <Accordion className='optionBox'>
            <Accordion.Item eventKey="0">
            <Accordion.Header>
                <h4>Upload Image</h4>
                <img src={pic} style={{width:'50px',marginRight:'20px'}}></img>
            </Accordion.Header>
            <Accordion.Body>
                    <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey='data_url'
                acceptType={["jpg","png","jpeg"]}
                >
                    {({
                            imageList,onImageUpload,onImageRemoveAll,
                            onImageUpdate,onImageRemove
                        }) =>(
                            <div>
                                <div className='top-img'>
                                    <Button variant='warning' className='m-1 p-2' onClick={onImageUpload}>Click to upload</Button>
                                    <Button variant='danger' className='m-1 p-2' onClick={onImageRemoveAll}>Remove All</Button>
                                </div>
                                <div className='image-List'>
                                    {imageList.map((image,index)=>(
                                        <div className='d-flex' key={index}>
                                        <Card style={{ height:'60%' }}>
                                            <Card.Img variant="top" src={image.data_url} alt="image" className='pic' />
                                            <Card.Body>
                                                <Button variant="success p-2"onClick={() => onImageUpdate(index)}>Update</Button>
                                                <Button variant="danger m-2 p-2"onClick={() => onImageRemove(index)}>Remove</Button>
                                            </Card.Body>
                                        </Card>
                                        </div>
                                    ))}
                                </div>
                                
                            </div>
                    )
                    }
                </ImageUploading>
            </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
        <div>
        <Accordion className='optionBox'>
            <Accordion.Item eventKey="0">
            <Accordion.Header>
                <h4>Upload Video</h4>
                <img src={video} style={{width:'50px',marginRight:'20px'}}></img>
            </Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            t laborum.
            </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
        <div>
        <Accordion className='optionBox'>
            <Accordion.Item eventKey="0">
            <Accordion.Header>
                <h4>Upload Audio</h4>
                <img src={audio} style={{width:'50px',marginRight:'20px'}}></img>
            </Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            t laborum.
            </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
        <div>
        <Accordion className='optionBox'>
            <Accordion.Item eventKey="0">
            <Accordion.Header>
                <h4>Add a note</h4>
                <img src={text} style={{width:'50px',marginRight:'20px'}}></img>
            </Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            t laborum.
            </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
        
      </div>
    
    </>

  )
}

export default VideoUpload
