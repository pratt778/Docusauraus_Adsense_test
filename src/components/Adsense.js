import React, { useEffect } from 'react';

const Adsense = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error: ", e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: "block" }}
         data-ad-client="ca-pub-4885029288825795"
         data-ad-slot="1437299238"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  );
};

export default Adsense;
