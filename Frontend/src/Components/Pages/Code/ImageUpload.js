import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import ImageUploading from 'react-images-uploading';
import '../Styles/Upload.css';

const ImageUpload = () => {
    const [images, setImages] = useState([]);
    const maxNumber = 50;

    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    const submitImage = () => {
        const data = new FormData();
        // Append images to FormData
        images.forEach((image) => {
            data.append("files", image.file);
        });
        data.append("userId", "123"); // Replace with actual user ID
    
        fetch("http://localhost:4000/Upload", { // Your backend endpoint
            method: "POST",
            body: data,
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            // Handle the response from your backend (e.g., store image URLs)
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <ImageUploading 
            multiple 
            value={images} 
            onChange={onChange} 
            maxNumber={maxNumber} 
            dataURLKey="data_url"
            acceptType={["jpg", "png", "jpeg"]}
        >
            {({
                imageList, onImageUpload, onImageRemoveAll,
                onImageUpdate, onImageRemove
            }) => (
                <div>
                    <div className="top-img">
                        <Button variant="warning" className="m-1 p-2" onClick={onImageUpload}>Click to upload</Button>
                        <Button variant="danger" className="m-1 p-2" onClick={onImageRemoveAll}>Remove All</Button>
                    </div>
                    <div className="image-List">
                        {imageList.map((image, index) => (
                            <div className="d-flex" key={index}>
                                <Card style={{ height: '60%' }}>
                                    <Card.Img variant="top" src={image.data_url} alt="image" className="pic" />
                                    <Card.Body>
                                        <Button variant="success p-2" onClick={() => onImageUpdate(index)}>Update</Button>
                                        <Button variant="danger m-2 p-2" onClick={() => onImageRemove(index)}>Remove</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                    <Button variant="outline-success" className="m-3 p-3" onClick={submitImage}>Upload to Cloud</Button>
                </div>
            )}
        </ImageUploading>
    );
}

export default ImageUpload;
