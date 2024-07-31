import React, { useRef } from 'react';
import mammoth from 'mammoth';

const UploadButton = ({ onDocumentUpload }) => {
  const fileInputRef = useRef(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.convertToHtml({ arrayBuffer: arrayBuffer });
      onDocumentUpload(result.value);
    } else {
      alert('Please upload a valid Word document.');
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".docx"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />
      <button onClick={() => fileInputRef.current.click()}>Upload Document</button>
    </div>
  );
};

export default UploadButton;
