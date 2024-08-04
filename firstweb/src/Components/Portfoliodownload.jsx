// PortfolioDownload.jsx
import React from 'react';

const PortfolioDownload = () => {
    const downloadPortfolio = () => {
        const pdfUrl = 'https://drive.google.com/uc?export=download&id=1Cc2T0U9MRBA3JU-zjXB2aTx2DxbHVwzb';
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
