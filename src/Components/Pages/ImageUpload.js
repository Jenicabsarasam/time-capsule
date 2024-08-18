import React from 'react'
import { useState } from 'react';
import { Button,Card} from 'react-bootstrap';
import ImageUploading from 'react-images-uploading';
import './Upload.css'



const ImageUpload = () => {
    const [images,setImages]=useState([]);
    const maxNumber=50;

    const onChange=(imageList,addUpdateIndex) =>{
        console.log(imageList,addUpdateIndex);
        setImages(imageList);
    };
    
  return (

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
            
  )
}

export default ImageUpload
