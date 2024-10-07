import { NextApiRequest, NextApiResponse } from 'next';

import Joi from 'joi';
import { ObjectId } from 'mongodb';
// import logger from 'lib/logger';
import xss from 'xss';

import clientPromise from '../../../lib/mongodb';

// type SearchQuery = {
//   name?: { $regex: string, $options: string };
//   telephone?: { $regex: string, $options: string };
//   city?: { $regex: string, $options: string };
// };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await clientPromise;
  const db = client.db('yfp_berlin_2024');
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  if (req.method === 'POST') {
    
      
      try {

        const schema = Joi.object({
          name: Joi.string().regex(/^[a-zA-Z0-9\s]+$/).min(3).max(100).required(),
          telephone: Joi.string().pattern(/^\+?[0-9\s]+$/).required(), // plus
          city: Joi.string().regex(/^[a-zA-Z0-9\s]+$/).min(2).max(100).required(),
        });
        const { error, value } = schema.validate(req.body);
        console.log(`ip: ${clientIp}    |    Called api/get_member POST    |    value: ${value.name} ${value.telephone} ${value.city}    |    error: ${error?.details[0].message}`);

        if (error) {
          res.status(400).json({message: error.details[0].message});
          console.log(`ip: ${clientIp}    |    cancelled api/get_member POST    |    value: ${value.name} ${value.telephone} ${value.city}    |    error: ${error?.details[0].message}`);
          return;
        }
  
        // const { name, telephone, city, groupName, tourName } = req.body;
        const sanitizedData = {
          name: xss(value.name),
          telephone: xss(value.telephone),
          city: xss(value.city),
        };
  
        const { name, telephone, city } = sanitizedData;

        const escapeRegex = (str: string) => {
          return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special characters
        };

        const searchQuery: any = {};
        if (name) searchQuery.name = { $regex: name as string, $options: 'i' };
        if (telephone) searchQuery.telephone = { $regex: escapeRegex(telephone) as string, $options: 'i' };
        if (city) searchQuery.city = { $regex: city as string, $options: 'i' };

        // const result = await db.collection('member').find(searchQuery).toArray();

        // if (!result) {
        //   console.log(`ip: ${clientIp}    |    cancelled api/get_member POST    |    error: member not found with searchquery: ${searchQuery}`);
        //   res.status(404).json({message: "Member not found. Nothing deleted."});
        // }

        const members = await db.collection('member').find(searchQuery).toArray();

        if (!members || members.length === 0) {
          console.log(`ip: ${clientIp}    |    cancelled api/get_member POST    |    error: member not found with searchquery: ${JSON.stringify(searchQuery)}`);
          res.status(404).json({ message: "Member not found." });
          return;
        }
      
        // Mitglieder durchlaufen und tourName hinzufügen
        const membersWithTourName = await Promise.all(members.map(async member => {
          let tourName = 'Unknown Tour';
        
          if (member.tour) {
            // Tour-Name basierend auf der Tour-ID abrufen
            const tour = await db.collection('tour').findOne({ _id: new ObjectId(member.tour) });
          
            if (tour && tour.name) {
              tourName = tour.name;
            }
          }
        
          return {
            ...member,
            tourName,
          };
        }));

        

        // const deletion = await db.delete
        console.log(`ip: ${clientIp}    |    accepted api/get_member POST    |    found result array`);

        res.status(200).json(membersWithTourName);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to get member' });
      }
  
  
  
    

  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
