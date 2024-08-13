// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';

// const Portfolio = () => {
//     const [error, setError] = useState(false);
//     const pdfUrl = 'https://drive.google.com/file/d/1KGjNi8tvmRIZwCsO89pq_K5zU359PzdY/view?usp=drive_link';

//     const handleLoadError = (error) => {
//         setError(true);
//         console.error('Error loading PDF:', error);
//     };

//     return (
//         <div>
//             {error ? (
//                 <div>Failed to load PDF file.</div>
//             ) : (
//                 <Document file={pdfUrl} onLoadError={handleLoadError}>
//                     <Page pageNumber={9} />
//                 </Document>
//             )}
//         </div>
//     );
// };

// export default Portfolio;

// <---------***************************************************************----------------->

// import React, { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';

// // Set workerSrc to load the worker script
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const Portfolio = () => {
//     const [error, setError] = useState(false);
//     const pdfUrl = 'https://drive.google.com/uc?export=download&id=1Cc2T0U9MRBA3JU-zjXB2aTx2DxbHVwzb';

//     const handleLoadError = (error) => {
//         setError(true);
//         console.error('Error loading PDF:', error);
//     };

//     return (
//         <div>
//             {error ? (
//                 <div>Failed to load PDF file.</div>
//             ) : (
//                 <Document file={pdfUrl} onLoadError={handleLoadError}>
//                     <Page pageNumber={9} /> {/* Changed to pageNumber={1} to ensure valid page */}
//                 </Document>
//             )}
//         </div>
//     );
// };

// export default Portfolio;

// <------------***********************************************----------------->
import React from 'react';

const PortfolioDownload = () => {
    const downloadPortfolio = () => {
        const pdfUrl = 'https://drive.google.com/file/d/1Cc2T0U9MRBA3JU-zjXB2aTx2DxbHVwzb/view?';
        const anchor = document.createElement('a');
        anchor.href = pdfUrl;
        anchor.download = 'portfolio.pdf';
        anchor.click();
    };

    return (
        <div>
            <button onClick={downloadPortfolio}>Download Portfolio</button>
        </div>
    );
};

export default PortfolioDownload;
