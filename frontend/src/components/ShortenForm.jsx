import React, { useState } from 'react';

function ShortenForm() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setShortUrl('');

    try {
      const response = await fetch('/api/shorten', {  // Adjust the URL if needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ longUrl: longUrl }),
      });

      const data = await response.json();

      if (response.ok) {
        setShortUrl(data.shortUrl);
      } else {
        setError(data.error || 'Failed to shorten URL');
      }
    } catch (e) {
      setError('Failed to connect to the server');
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center mt-4">
      <input
        type="url"
        placeholder="Your URL Here"
        className="rounded-full px-4 py-2 w-64 mr-2 text-gray-700 focus:outline-none"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full px-6 py-2 focus:outline-none"
      >
        SHORTEN →
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {shortUrl && <p className="text-green-500 mt-2">Shortened URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>}
    </form>
  );
}

export default ShortenForm;
