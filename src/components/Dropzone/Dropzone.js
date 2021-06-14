import "./Dropzone.css"
import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {faImage} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Dropzone(props) {

    const [files, setFiles] = useState([]);
    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/jpeg, image/jpg, image/png',
        maxFiles: 1,
        maxSize: 2000000,
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));

        }
    });

    const thumbs = files.map(file => (
        <div className="thumb" key={file.name}>
                <img
                    src={file.preview}
                    className="preview-image"
                />
        </div>
    ));

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <section className="container">
            <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <FontAwesomeIcon icon={faImage} className="img-image"/>
                <p>Drag 'n' drop an image here, or click to select files</p>
            </div>
            <aside className="thumbsContainer">
                {thumbs}
            </aside>
        </section>
    );
}

export default Dropzone;