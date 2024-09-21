import FileSaver from "file-saver";

const getFileExtension = (url) => {
  const parts = url.split("/");

  return parts[parts.length -1].split(".")[1];
};

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

const getFontDownloadURL = async (fontName) => {
  const data = await makeGFontsRequest(fontName).catch((error) => {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("An unknown error has occurred while scouting the font");
    };
  });

  if (data) {
    const match = data.match(/src:\s*url\((.*?)\)/);
    return match && match[1] ? match[1].replace(/['"]/g, "") : null;
  }
};

const handleFontDownload = async (fontName) => {
  try {
    const url = await getFontDownloadURL(fontName);

    if (!url) {
      throw new Error("Underfined download URL!");
    }

    const extension = getFileExtension(url);

    FileSaver.saveAs(url, `${fontName}.${extension}`);
  } catch(error) {
    throw error;
  }
};

export default handleFontDownload;
