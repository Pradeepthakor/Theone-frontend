// // PortfolioDownload.jsx
// // import React from 'react';

// // const PortfolioDownload = () => {
// //     const downloadPortfolio = () => {
// //         const pdfUrl = 'https://drive.google.com/file/d/1Cc2T0U9MRBA3JU-zjXB2aTx2DxbHVwzb/view?';
// //         const anchor = document.createElement('a');
// //         anchor.href = pdfUrl;
// //         anchor.download = 'portfolio.pdf';
// //         anchor.click();
// //     };

// //     return (
// //         <div>
// //             <button onClick={downloadPortfolio}>Download Portfolio</button>
// //         </div>
// //     );
// // };

// // export default PortfolioDownload;

// // <-----------****************************************------------>


// import React, { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const Portfolio = () => {
//     const [numPages, setNumPages] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(false);
//     const pdfUrl = 'https://drive.google.com/file/d/1Cc2T0U9MRBA3JU-zjXB2aTx2DxbHVwzb/view?'  // Replace with your URL

//     const onDocumentLoadSuccess = ({ numPages }) => {
//         setNumPages(numPages);
//         setLoading(false);
//     };

//     const onDocumentLoadError = (error) => {
//         setError(true);
//         setLoading(false);
//         console.error('Error loading PDF:', error);
//     };

//     return (
//         <div>
//             {loading && <div>Loading PDF...</div>}
//             {error && <div>Failed to load PDF file.</div>}
//             {!loading && !error && (
//                 <Document
//                     file={pdfUrl}
//                     onLoadSuccess={onDocumentLoadSuccess}
//                     onLoadError={onDocumentLoadError}
//                 >
//                     {/* Example of rendering the first page */}
//                     <Page pageNumber={1} />
//                 </Document>
//             )}
//         </div>
//     );
// };

// export default Portfolio;


