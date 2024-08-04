import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const Portfolio = () => {
    const [error, setError] = useState(false);
    const pdfUrl = 'https://drive.google.com/uc?export=download&id=1Cc2T0U9MRBA3JU-zjXB2aTx2DxbHVwzb';

    const handleLoadError = (error) => {
        setError(true);
        console.error('Error loading PDF:', error);
    };

    return (
        <div>
            {error ? (
                <div>Failed to load PDF file.</div>
            ) : (
                <Document file={pdfUrl} onLoadError={handleLoadError}>
                    <Page pageNumber={9} />
                </Document>
            )}
        </div>
    );
};

export default Portfolio;
