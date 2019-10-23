import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
 pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
    state = {
      numPages: null,
      pageNumber: 1,
    }
   
    onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({ numPages });
    }
   
    render() {
      const { pageNumber, numPages } = this.state;   
      return (
        <div>
          <center>
          <Document
            file={process.env.PUBLIC_URL + "/Thomas Lewis Resume.pdf"}
            onLoadSuccess={this.onDocumentLoadSuccess}
            onLoadError={console.error}
          >
            <Page pageNumber={1} />
          </Document>
          <p>Page {pageNumber} of {numPages}</p>
          <Document
            file={process.env.PUBLIC_URL + "/Thomas Lewis Resume.pdf"}
            onLoadSuccess={this.onDocumentLoadSuccess}
            onLoadError={console.error}
          >
            <Page pageNumber={2} />
          </Document>
          <p>Page 2 of {numPages}</p>
          </center>
        </div>
      );
    }
  }


// function Resume () {
//     return (
//         <div>
//             <h1>Thomas Lewis Resume</h1>
//             <h2>{"'" + process.env.PUBLIC_URL + "/Resume.pdf'"}</h2>
//             <Document 
//                 file={process.env.PUBLIC_URL + "/Resume.pdf"} 
//                 onLoadError={console.error} 
//             />
//         </div>
//     )
// }

 export default Resume;
