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
        // Since you're allowing multiple images, we'll upload them one by one.
        images.forEach((image) => {
            data.append("file", image.file);
            data.append("upload_preset", "TimeCapsule"); // Your upload preset
            data.append("cloud_name", "dalsvcuxk"); // Your Cloudinary cloud name

            fetch("https://api.cloudinary.com/v1_1/dalsvcuxk/image/upload", {
                method: "POST",
                body: data,
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // You can store the returned image URL in your database or state
            })
            .catch((err) => {
                console.log(err);
            });
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
