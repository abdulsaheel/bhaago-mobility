// pages/test.tsx
"use client"
import { useState } from 'react';

const TestPage = () => {
  const [status, setStatus] = useState<string | null>(null);

  const sendRequest = async () => {
    const payload = {
      "Your Name": "Abdul Sahil",
      "Your Email": "john.doe@example.com",
      "Phone Number": "+1 123-456-7890",
      "Location": "United States",
      "Company Name": "Doe Enterprises",
      "Message": "I would like more information about your services."
    };

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyFtByY18CERI8ThS6LyL5qmRhVDHlIbOryV08Y1QPBZt54g6LdvWaBNt-oDIbsp7wc/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        mode: 'no-cors', // This will bypass the preflight check but limits the response.
      });

      // We won't be able to check the actual response body due to no-cors mode, 
      // but we can check if the request was made successfully.
      if (response.ok) {
        setStatus('Request sent successfully!');
      } else {
        setStatus('Request failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error occurred while sending the request.');
    }
  };

  return (
    <div>
      <h1>Send Request</h1>
      <button onClick={sendRequest}>Send Request</button>
      {status && <p>Status: {status}</p>}
    </div>
  );
};

export default TestPage;
