const { v4: uuidv4 } = require("uuid");
const path = require("path");
const fs = require("fs");

/**
 * Faylni saqlash funksiyasi
 * @param {Object} file - Yuklangan fayl obyekti
 * @returns {Promise<string>} - Yuklangan fayl nomi
 */
async function saveFile(file) {
  try {
    const fileName = uuidv4() + path.extname(file.name); // Fayl kengaytmasini olish
    const currentDir = __dirname;
    const staticDir = path.join(currentDir, '..', 'static'); // static fayl saqlash

    // Papka mavjudligini tekshirish va yaratish
    if (!fs.existsSync(staticDir)) {
      fs.mkdirSync(staticDir, { recursive: true });
    }

    // Faylni saqlash
    await file.mv(path.join(staticDir, fileName)); // file.mv asynx funksiyadir

    return fileName; // Fayl nomini qaytarish
  } catch (err) {
    throw new Error(`Faylni saqlashda xato: ${err.message}`);
  }
}

module.exports = { saveFile };
