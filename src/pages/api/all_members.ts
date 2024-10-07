import { NextApiRequest, NextApiResponse } from 'next';

import { parse } from 'json2csv'; // Paket zum Konvertieren von JSON zu CSV

// import logger from 'lib/logger';
import clientPromise from '../../../lib/mongodb'; // Deine MongoDB-Verbindung

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  if (req.method === 'GET') {
    try {
      const client = await clientPromise;
      const db = client.db('yfp_berlin_2024');
      // logger.info(`ip: ${clientIp}    |    Called api/all_members POST`);
      console.log(`ip: ${clientIp}    |    Called api/all_members POST`)

      // Schritt 1: Abrufen der Mitgliederdaten
      const members = await db.collection('member').find({}).toArray();

      // Schritt 2: Abrufen der Touren-Namen für jede Tour-ID
      const memberPromises = members.map(async (member) => {
        if (member.tour) {
          const tour = await db.collection('tour').findOne({ _id: member.tour });
          return {
            ...member,
            tourName: tour ? tour.name : 'Unknown'
          };
        } else {
          return {
            ...member,
            tourName: 'Unknown'
          };
        }
      });

      const membersWithTourNames = await Promise.all(memberPromises);

      // Konvertiere JSON-Daten zu CSV
      const csv = parse(membersWithTourNames);

      // Setze Header für die CSV-Datei
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename="members.csv"');
      
      // Sende CSV-Daten als Antwort
      res.status(200).send(csv);
      console.log(`ip: ${clientIp}    |    accepted api/all_members POST    |    csv created`);

    } catch (error) {
      console.log(`ip: ${clientIp}    |    cancelled api/all_members POST    |    error: ${error}`);
      res.status(500).json({ message: 'Error fetching or converting data' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
