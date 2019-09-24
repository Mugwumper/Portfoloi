import React from "react";
import { Document } from 'react-pdf'

function Resume () {
    return (
        <div>
            <h1>Thomas Lewis Resume</h1>
            <Document file={process.env.PUBLIC_URL + "/Thomas Lewis Resume.pdf"} />
        </div>
    )
}

export default Resume;
