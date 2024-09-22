const fineTuneFontName = (rawFontName) => {
  return rawFontName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("+");
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
  } catch(error) {
    throw error;
  }
};

const getFontDownloadURLAndFormat = async (fontName) => {
  const data = await makeGFontsRequest(fontName).catch((error) => {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("An unknown error has occurred while scouting the font");
    };
  });

  if (data) {
    const regex = /src:\s*url\([^)]+\)\s*format\(['"]([^'"]+)['"]\)/;
    const formatMatch = data.match(regex);
    const urlMacth = data.match(/src:\s*url\((.*?)\)/);

    if (formatMatch && urlMacth && urlMacth[1]) {
      const url = urlMacth[1].replace(/['"]/g, "");
      const format = formatMatch[1];

      return { url, format };
    }

    return null;
  }
};

export default getFontDownloadURLAndFormat;
