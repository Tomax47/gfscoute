const fineTuneFontName = (rawFontName) => {
    return rawFontName
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('+');
};

const makeGFontsRequest = async (fontName) => {
    const fineTunedFontName = fineTuneFontName(fontName);
    try {
      const resp = await fetch(`https://fonts.googleapis.com/css2?family=${fineTunedFontName}`);
      if (resp.ok) {
        const data = await resp.text();
        return data;
      }
      return null;
    } catch {
      return null;
    }
};

const getFontDownloadURL = async (fontName) => {
    const data = await makeGFontsRequest(fontName);

    if (data !== null) {
      const match = data.match(/src:\s*url\((.*?)\)/);
      return match && match[1] ? match[1].replace(/['"]/g, '') : null;
    }

    return null;
};

const handleFontDownload = async (fontName) => {
    try {
    //   const link = document.createElement('a');
    //   link.href = url;
    //   link.download = '';

    //   document.body.appendChild(link);
    //   link.click();
    //   document.body.removeChild(link);

    const url = await getFontDownloadURL(fontName);
    console.log(`URL -> ${url}`);
    } catch(error) {
      throw error;
    }
}

export default handleFontDownload;
