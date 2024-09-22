import FileSaver from "file-saver";
import getFontDownloadURLAndFormat from "./scoute_font.js";

const handleFontDownload = async (fontName) => {
  const typeMap = {
    "woff": "woff",
    "woff2": "woff2",
    "ttf": "ttf",
    "otf": "otfs",
    "truetype": "woff2"
  };

  try {
    const { url, format } = await getFontDownloadURLAndFormat(fontName);

    if (!url) {
      throw new Error("Underfined download URL!");
    }

    const extension = typeMap[format];

    if (!extension) {
      throw new Error(`Unsupported file type: ${extension}.`);
    };

    FileSaver.saveAs(url, `${fontName}.${extension}`);
  } catch(error) {
    throw error;
  }
};

export default handleFontDownload;
