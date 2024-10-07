import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const filePath = path.resolve('.', 'public/files/yourfile.zip');  // Pfad zur Datei im Projektverzeichnis
    const fileBuffer = fs.readFileSync(filePath);

    res.setHeader('Content-Type', 'application/zip'); // Dateityp angeben
    res.setHeader('Content-Disposition', 'attachment; filename=yourfile.zip'); // Dateiname
    res.send(fileBuffer);
}