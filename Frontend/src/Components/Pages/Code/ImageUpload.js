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
        images.forEach((image) => {
            const data = new FormData();
            data.append("file", image.file);
            data.append("upload_preset", "TimeCapsule"); // Your upload preset
            data.append("cloud_name", "dalsvcuxk"); // Your Cloudinary cloud name
    
            // Upload to Cloudinary
            fetch("https://api.cloudinary.com/v1_1/dalsvcuxk/image/upload", {
                method: "POST",
                body: data,
            })
            .then((res) => res.json())
            .then((cloudinaryData) => {
                console.log(cloudinaryData);
    
                // Assuming you have userId stored in your application state or retrieved from authentication
                const userId = 1; // Replace with actual user ID
    
                // Send the image URL to the backend to store it in the database
                fetch("http://localhost:4000/api/upload", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userId: userId,
                        imageUrl: cloudinaryData.url, // URL from Cloudinary response
                    }),
                })
                .then((res) => res.json())
                .then((dbData) => {
                    console.log("Image URL stored in DB:", dbData);
                })
                .catch((err) => {
                    console.error("Error storing image URL in DB:", err);
                });
            })
            .catch((err) => {
                console.error("Error uploading to Cloudinary:", err);
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
