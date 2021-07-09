export default function PageFileUpload() {
    return (
        <div className="page-wrapper">
            <div className="page-wrapper-inner">
                <h1>File upload</h1>
                <form method="post" action="http://localhost:8080/api/method1/files" encType="multipart/form-data">
                    <div>
                        <label>File to upload</label> <input type="file" id="file" name="file"/>
                    </div>
                    <input type="submit" value="Upload to webservice"/>
                </form>
            </div>
        </div>
    )
}