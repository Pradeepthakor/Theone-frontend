import React, { useState } from 'react';

const FAQ = () => {
    return (
        <div className="row">

            <div className="col-lg-12">
                <strong>Q1: What is data scraping?</strong>
                <br></br>
                <p>Data scraping is the process of automatically extracting data from websites and converting it into a structured format for analysis or other purposes. It's like copying and pasting information online, but done by software at a much larger scale.</p>
                <br></br>
                <br></br>
            </div>

            <div className="col-lg-12">
                <strong>Q2: What are the benefits of data scraping?</strong>
                    <p>A: Data scraping can help businesses in various ways. Here are 5 benefits of Data Scraping:</p>
                <ul style={{ listStyleType: 'decimal', marginLeft: '20px' }}>
                    <li>Market research: Analyze competitor pricing, product trends, and customer sentiment.</li>
                    <li>Lead generation: Identify potential customers based on online activity.</li>
                    <li>Price monitoring: Track competitor pricing and ensure yours is competitive.</li>
                    <li>Content creation: Gather data for reports, articles, and infographics.</li>
                    <li>Machine learning: Train machine learning models with large datasets.</li>
                </ul>
                
                <br></br>
                <br></br>
            </div>
            <div className="col-lg-12">
                <strong>Q3: What types of data can you scrape?</strong>
                <p>A: We can scrape a wide variety of data, including:</p>
                <ul style={{ listStyleType: 'decimal', marginLeft: '20px' }}>
                    <li>Text: product descriptions, reviews, news articles, social media posts.</li>
                    <li>Numbers: prices, stock levels, financial data, event dates.</li>
                    <li>Images: product photos, logos, infographics.</li>
                    <li>Structured data: tables, lists, spreadsheets.</li>
                </ul>
                <br></br>
                <br></br>
                <div className="col-lg-12">
                <strong>Q4: How much does data scraping cost?</strong>
                <br></br>
                <p>A: The cost depends on the complexity of the project, the amount of data, and the frequency of scraping. We offer customized pricing options to fit your budget.</p>
                <br></br>
                </div>

            </div>
        </div>
    );
};

export default FAQ;
