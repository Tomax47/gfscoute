import handleFontDownload from "../bin/by_name_scout.js";

async function DownloadFont(fontName) {
    try {
        await handleFontDownload(fontName);
    } catch(error) {
        throw error;
    }
};

export default DownloadFont;
