// import React, { useState, useEffect} from 'react'
// import {useDropzone} from 'react-dropzone'
// import {FaImage} from "react-icons/fa";
// import "./Dropzone.css"
//
// function Dropzone() {
//
//     const  maxSize = 2000000;
//     const [files, setFiles] = useState([]);
//     const {getRootProps, getInputProps, isDragActive, acceptedFiles,fileRejections} = useDropzone({
//         multiple: false,
//         accept: "image/jpg, image/jpeg, image/png",
//         maxSize: maxSize,
//         maxFiles: 1,
//         onDrop: acceptedFiles => {
//             setFiles(acceptedFiles.map(file => Object.assign(file, {
//                 preview: URL.createObjectURL(file)
//             })));
//         },
//
//     })
//
//     // const thumbs = files.map(file => (
//     //     <div className="thumb" key={file.name}>
//     //         <div className="thumbInner">
//     //             <img
//     //                 src={file.preview}
//     //                 className="img"
//     //             />
//     //         </div>
//     //     </div>
//     // ));
//
//     const acceptedFileItems = acceptedFiles.map(file => (
//         <li key={file.path}>
//             {file.path} - {file.size / 1000000} MB
//         </li>
//     ));
//
//     const fileRejectionItems = fileRejections.map(({ file, errors  }) => {
//         return (
//             <li key={file.path}>
//                 {file.path} - {file.size / 1000000} MB
//                 <ul className="error-list">
//                     {errors.map(e => <li className="error-message" key={e.code}>{e.message}</li>)}
//                 </ul>
//             </li>
//         )
//     });
//
//     // useEffect(() => () => {
//     //     // Make sure to revoke the data uris to avoid memory leaks
//     //     files.forEach(file => URL.revokeObjectURL(file.preview));
//     // }, [files]);
//
//     return (
//         <>
//             <div className="dropzone-holder" {...getRootProps()}>
//                 <input {...getInputProps()} />
//                 {
//                     isDragActive ?
//                         <>
//
//                             <p>Drop your image here ...</p>
//                         </>
//                         :
//                         <>
//                             <FaImage className="dropzone-image"/>
//                             <p>Drag 'n' drop an image here, or click to select an image</p>
//                             <em>We accept *.png, *.jpg and *.jpeg</em>
//                         </>
//                 }
//
//             </div>
//             <aside className="thumb-container">
//                 <div className="accepted">
//                     <h4>Accepted files</h4>
//                     <ul>{acceptedFileItems}</ul>
//                 </div>
//                 <div className="rejected">
//                     <h4>Rejected files</h4>
//                     <ul>{fileRejectionItems}</ul>
//                 </div>
//
//                 <div className="preview-wrap">
//                     <h2>Preview</h2>
//                     <em>This is how the image will be shown at the top of your uploaded recipe.</em>
//                     {/*{thumbs}*/}
//                 </div>
//             </aside>
//         </>
//     )
// }
//
// export default Dropzone;