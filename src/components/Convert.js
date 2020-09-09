import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedTex] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTex(text);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);
  useEffect(() => {
    const doTranslation = async () => {
      const googleApikey = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: googleApikey,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debouncedText]);
  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};
export default Convert;
