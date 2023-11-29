import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShareArticleLink = (props) => {
  const articleId = props.moto?._id;

  const generateShareableLink = () => {
    const baseUrl = window.location.origin;
    const articleUrl = `${baseUrl}/catalog/${articleId}`;

    navigator.clipboard.writeText(articleUrl)
      .then(() => {
        toast('🦄 Copy to clipboard success!', {
          position: "top-center",
          autoClose: 3000,
          });
      })

      .catch((error) => {
        toast.error('Failed to copy')
      });
  };

  return (
    <div>
      <button onClick={generateShareableLink}>Share Link</button>
    </div>
  );
};

export default ShareArticleLink;

