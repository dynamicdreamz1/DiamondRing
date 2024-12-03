// CertificateImage.js
import React from 'react';
import GiaImg from "../assets/Images/giaImg.svg"
import IgiImg from "../assets/Images/igiImg.svg"


export const CertificateImage = ({ className, lab }) => {
    return (
        <img
            className={className}
            src={lab ? IgiImg : GiaImg}
            alt="Certificate Image"
        />
    );
};





export const ViewCertificate = ({ className, diamond }) => {

    let certificateUrl = '';

    if (diamond?.diamond?.certificate?.lab === "GIA") {
        certificateUrl = `https://www.gia.edu/report-check-landing?reportno=${diamond?.diamond?.certificate?.certNumber}`;
    } else if (diamond?.diamond?.certificate?.lab  === "IGI") {
        certificateUrl = `https://www.igi.org/verify-your-report/?r=${diamond?.diamond?.certificate?.certNumber}`;
    } else {
        console.error("Unknown certificate lab");
    }

    return (
        certificateUrl ? (
            <a href={certificateUrl} className={className} target="_blank" rel="noopener noreferrer">
                View Certificate
            </a>
        ) : (
            <div className={className}>No Certificate Available</div>
        )
    );
};
