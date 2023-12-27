import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './Speech.css';

const Speechtotext = () => {
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  const notify = () => {
    toast.success('Speech copied to clipboard!', {
      position: toast.POSITION.TOP_CENTER
    });
  };

  const copyspeech = () => {
    window.navigator.clipboard.writeText(transcript);
    notify();
  };

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  if (!browserSupportsSpeechRecognition) {
    return <div>Your browser does not support speech recognition.</div>;
  }

  return (
    <div>
       <div className="navbar bg-base-100">
  <a className="btn btn-ghost text-xl text-white">Speech To Text converter</a>
</div>
        <div className="con ">
        
        <div className="card">
        
          <p >{transcript}</p>
          <ul>
            <li>
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-green-400"
                onClick={startListening}
              >
                Start Recording
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400"
                onClick={stopListening}
              >
                Stop Recording
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
                onClick={copyspeech}
              >
                Copy To Clipboard
              </button>
            </li>
           
          </ul>
        </div>
        <ToastContainer />
  
        
      </div>
      
    </div>
  );
};

export default Speechtotext;
