import React, { useState } from 'react';

export default function Index() {
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async () => {
    if (!name) {
      alert("Please enter your name");
      return;
    }

    try {
      const res = await fetch("/api/greet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      console.error("API Error:", error);
      setResponse("Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-black">
        <h1 className="text-2xl font-bold mb-4 text-center">Welcome to Younglabs</h1>
        <input 
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" 
          placeholder='Enter your name' 
          value={name} 
          onChange={handleChange} 
        />
        <button 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition duration-300" 
          onClick={handleSubmit}
        >
          Send
        </button>
        {response && <p className="mt-4 text-center text-lg font-semibold text-green-600">{response}</p>}
      </div>
    </div>
  );
}
