// pages/api/addTour.js
import { NextApiRequest, NextApiResponse } from 'next';

// import logger from 'lib/logger';
import clientPromise from '../../../lib/mongodb';


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const db = client.db('yfp_berlin_2024');
      const { name, description, index } = req.body;
      // const resultGroupA = await db.collection('group').insertOne({
      //   name: `${index}A`,
      //   members_count: 0
      // });

      // const resultGroupB = await db.collection('group').insertOne({
      //   name: `${index}B`,
      //   members_count: 0
      // });

      const result = await db.collection('tour').insertOne({
        name: name +  " " + index,
        description,
        members_count: 0,
        location: "https://maps.app.goo.gl/92A9frA5vsoGUa3cA"
        // groups: [
        //   resultGroupA.insertedId,
        //   resultGroupB.insertedId
        // ]
      });
      console.log(`ip: ${clientIp}    |    Called api/tour POST    |    tour successfully added: ${result}`);


      res.status(201).json(result);
    } catch (error) {
      console.log(`ip: ${clientIp}    |    Called api/tour POST    |    tour not added: ${error}`);
      res.status(500).json({ error: 'Unable to create tour' });
    }



  } else if (req.method === 'GET') {
    try {
      const client = await clientPromise;
      const db = client.db('yfp_berlin_2024');

      const tours = await db.collection('tour').find({}).toArray();
      console.log(`ip: ${clientIp}    |    Called api/tour GET    |    returned tours`);

      // Für jede Tour die Gruppeninformationen abrufen
      // const toursWithGroups = await Promise.all(
      //   tours.map(async (tour) => {
      //     const groups = await db.collection('group').find({ _id: { $in: tour.groups.map((id: string) => new ObjectId(id)) } }).toArray();
      //     return { ...tour, groups };
      //   })
      // );
      res.status(200).json(tours);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Unable to get tours' });
    }



  } else if (req.method === 'DELETE') {
    try {
      const client = await clientPromise;
      const db = client.db('yfp_berlin_2024');

      await db.collection('tour').deleteMany({});
      console.log(`ip: ${clientIp}    |    Called api/tour DELETE    |    deleted all tours`);

      res.status(200).json({});
    }
    catch (error) {
      console.log(`ip: ${clientIp}    |    cancelled api/tour DELETE    |    deletion of all tours failed`);
      res.status(500).json({message: "unable to delete all tours"});
    }
    
  }
  
  else {
    res.setHeader('Allow', ['POST', 'GET', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
