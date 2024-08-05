import React, { useState } from 'react';

const encryptDecrypt = (text, key) => {
  const keyLength = key.length;
  return text.split('').map((char, index) => {
    const keyChar = key[index % keyLength];
    return String.fromCharCode(char.charCodeAt(0) ^ keyChar.charCodeAt(0));
  }).join('');
};

const Steganography = () => {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [outputImage, setOutputImage] = useState(null);
  const [extractedMessage, setExtractedMessage] = useState('');
  const [key, setKey] = useState('');
  const [extractionKey, setExtractionKey] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEmbedText = () => {
    if (!message || !image) {
      alert('Please upload an image and enter a message.');
      return;
    }

    if (!key) {
      alert('Please enter a key.');
      return;
    }

    const encryptedMessage = encryptDecrypt(message, key);
    const binaryMessage = textToBinary(encryptedMessage) + '1111111111111110'; // delimiter
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = image;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      let dataIndex = 0;
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < imageData.data.length; i += 4) {
        if (dataIndex < binaryMessage.length) {
          imageData.data[i] = (imageData.data[i] & 0xFE) | parseInt(binaryMessage[dataIndex]);
          dataIndex++;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setOutputImage(canvas.toDataURL());
    };
  };

  const handleExtractText = () => {
    if (!outputImage) {
      alert('Please embed a message first.');
      return;
    }
    if (!extractionKey) {
      alert('Please enter the key used for encryption.');
      return;
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = outputImage;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let binaryMessage = '';

      for (let i = 0; i < imageData.data.length; i += 4) {
        binaryMessage += (imageData.data[i] & 1);
      }

      const delimiter = '1111111111111110';
      const endIndex = binaryMessage.indexOf(delimiter);
      if (endIndex !== -1) {
        binaryMessage = binaryMessage.slice(0, endIndex);
      }

      const decryptedMessage = binaryToText(binaryMessage);
      setExtractedMessage(encryptDecrypt(decryptedMessage, extractionKey));
    };
  };

  const textToBinary = (text) => {
    return Array.from(text).map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join('');
  };

  const binaryToText = (binary) => {
    return binary.match(/.{1,8}/g).map(byte => String.fromCharCode(parseInt(byte, 2))).join('');
  };

  return (
    <div>
      <h1>Steganography in React</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <br />
      <textarea placeholder="Enter text to hide" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      <br />
      <input
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="Enter encryption key"
      />
      <br />
      <button onClick={handleEmbedText}>Embed Text</button>
      {outputImage && (
        <>
          <h2>Image with Embedded Text</h2>
          <img src={outputImage} alt="Output" style={{ maxWidth: '500px' }} />
          <br />
          <input
            type="text"
            value={extractionKey}
            onChange={(e) => setExtractionKey(e.target.value)}
            placeholder="Enter key to extract text"
          />
          <br />
          <button onClick={handleExtractText}>Extract Text</button>
          {extractedMessage && (
            <>
              <h2>Extracted Message</h2>
              <p>{extractedMessage}</p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Steganography;
