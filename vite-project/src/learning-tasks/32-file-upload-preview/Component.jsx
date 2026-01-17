import React, { useState } from 'react';

export default function FileUploadDemo() {
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState('');

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setFileSize((file.size / 1024).toFixed(1) + ' KB');
    }
  };

  return (
    <div className="module-card">
      <h3>📁 Topic 32: File Upload & Drag-and-Drop Dropzone</h3>
      
      <div className="dropzone-area">
        <input type="file" onChange={handleFile} id="file-up" className="file-input-hidden" />
        <label htmlFor="file-up" className="dropzone-label">
          📤 Click or Drag & Drop file here to upload
        </label>
      </div>

      {fileName && (
        <div className="file-info-badge mt-2">
          📄 Selected: <strong>{fileName}</strong> ({fileSize})
        </div>
      )}
    </div>
  );
}