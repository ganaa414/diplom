// pages/index.tsx
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

const Home = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [fileList, setFileList] = useState<string[]>([]);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await axios.get<string[]>('http://localhost:5000/files');
      setFileList(response.data);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleFileNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFile) {
      setMessage('Please select a file!');
      return;
    }
    if (!fileName) {
      setMessage('Please enter a filename!');
      return;
    }
    const formData = new FormData();
    formData.append('file', selectedFile, fileName); // Append filename to the FormData
    try {
      await axios.post('http://localhost:5000/upload', formData);
      setMessage(`File uploaded: ${fileName}`);
      fetchFiles();
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('An error occurred while uploading the file');
    }
  };

  return (
    <div>
      <h1>Upload PDF File</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept="application/pdf" />
        <input type="text" value={fileName} onChange={handleFileNameChange} placeholder="Enter filename" />
        <button type="submit">Upload</button>
      </form>
      <p>{message}</p>
      <h2>Uploaded Files</h2>
      <ul>
        {fileList.map((file) => (
          <li key={file}>
            <a href={`http://localhost:5000/download/${file}`} target="_blank" rel="noopener noreferrer">
              {file}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
