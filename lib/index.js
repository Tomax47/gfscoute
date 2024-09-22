import handleFontDownload from "../bin/by_name_scout.js";
import getFontDownloadURLAndFormat from "../bin/scoute_font.js";

export async function DownloadFont(fontName) {
  try {
    await handleFontDownload(fontName);
  } catch(error) {
    throw error;
  }
};

export async function ScouteFont(fontName) {
  try {
    const {url, format } = await getFontDownloadURLAndFormat(fontName);

    if (url && format) {
      return true;
    }

    return false;
  } catch(error) {
    throw error;
  }
};
