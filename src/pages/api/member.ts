import { NextApiRequest, NextApiResponse } from 'next';

import Joi from 'joi';
import xss from 'xss';

// import logger from '../../../lib/logger';
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
      // const client = await clientPromise;
      // const db = client.db('yfp_berlin_2024');
      const schema = Joi.object({
        name: Joi.string().regex(/^[a-zA-Z0-9\s]+$/).min(3).max(100).required(),
        telephone: Joi.string().pattern(/^\+?[0-9\s]+$/).required(), // plus
        city: Joi.string().regex(/^[a-zA-Z0-9\s]+$/).min(2).max(100).required(),
        // groupName: Joi.string().alphanum().min(1).max(100).required(),
        tourName: Joi.string().regex(/^[a-zA-Z0-9\s._]*$/).min(1).max(100).required(),
      });
      const { error, value } = schema.validate(req.body);
      console.log(`ip: ${clientIp}    |    Called api/member POST    |    value: ${value.name} ${value.telephone} ${value.city}    |    error: ${error?.details[0].message}`);

      if (error) {
        res.status(400).json({message: error.details[0].message});
        console.log(`ip: ${clientIp}    |    cancelled api/member POST    |    value: ${value.name} ${value.telephone} ${value.city}    |    error: ${error?.details[0].message}`);
        return;
      }

      // const { name, telephone, city, groupName, tourName } = req.body;
      const sanitizedData = {
        name: xss(value.name),
        telephone: xss(value.telephone),
        city: xss(value.city),
        // groupName: xss(value.groupName),
        tourName: xss(value.tourName),
      };

      const { name, telephone, city, tourName } = sanitizedData;


      const memberAlreadyInTour = await db.collection('member').findOne({name: name, telephone, city});
      if (memberAlreadyInTour) {
        console.log(`ip: ${clientIp}    |    cancelled api/member POST    |    error: Member already in group: ${value.name} ${value.telephone} ${value.city}s`);
        res.status(409).json({message: "Member is already in a tour. Please unsubscribe from a group before registering for it.",
          member: memberAlreadyInTour
        });
        return;
      }



      const tour = await db.collection('tour').findOne({name: tourName});
      if (tour.members_count >= 70) {
        console.log(`ip: ${clientIp}    |    cancelled api/member POST    |    error: members count > 70`);
        res.status(409).json({message: "There are already 70 members in this tour. A group can't have more than 70 members. Please register for another group."});
        return;
      }

      
      const memberResult = await db.collection('member').insertOne({
        name,
        telephone,
        city,
        // group: group._id, 
        tour: tour._id,
      });

      const memberId = memberResult.insertedId;

      await db.collection('tour').updateOne(
        { _id: tour._id },
        { $inc: { members_count: 1 } }
    );
    console.log(`ip: ${clientIp}    |    accepted api/member POST    |    created: ${memberResult.name} ${memberResult.telephone} ${memberResult.city}`);

    
      res.status(201).json(memberId);
    } catch (error) {
      console.log(`ip: ${clientIp}    |    cancelled api/member POST    |    undefined error: ${error}`);
      res.status(500).json({ error: 'Unable to create member' });
    }



  } else if (req.method === 'DELETE') {
    try {
      const schema = Joi.object({
        name: Joi.string().regex(/^[a-zA-Z0-9\s]+$/).min(3).max(100).required(),
        telephone: Joi.string().pattern(/^\+?[0-9\s]+$/).required(), // plus
        city: Joi.string().regex(/^[a-zA-Z0-9\s]+$/).min(2).max(100).required(),
      });
      const { error, value } = schema.validate(req.body);
      console.log(`ip: ${clientIp}    |    Called api/member DELETE    |    value: ${value.name} ${value.telephone} ${value.city}    |    error: ${error?.details[0].message}`);

      if (error) {
        res.status(400).json({message: error.details[0].message});
        console.log(`ip: ${clientIp}    |    cancelled api/member DELETE    |    value: ${value.name} ${value.telephone} ${value.city}    |    error: ${error?.details[0].message}`);
        return;
      }

      // const { name, telephone, city, groupName, tourName } = req.body;
      const sanitizedData = {
        name: xss(value.name),
        telephone: xss(value.telephone),
        city: xss(value.city),
      };

      const { name, telephone, city } = sanitizedData;
      console.log(sanitizedData);
      // const { name, telephone, city } = req.query; // plus

      const memberResult = await db.collection("member").findOne({name, telephone, city})
      if (!memberResult) {
        console.log(`ip: ${clientIp}    |    cancelled api/member DELETE    |    error: member not found`);
        return res.status(404).json({ message: 'Member not found' });
      }
      
      const tourResult = await db.collection("tour").findOne({_id: memberResult.tour})
      if (!tourResult) {
        console.log(`ip: ${clientIp}    |    cancelled api/member DELETE    |    error: tour not found`);
        return res.status(500).json({ message: 'Tour of member not found' });
      }

      const result = await db.collection('member').deleteOne({name, telephone, city});
      if (result.deletedCount === 0) {
        console.log(`ip: ${clientIp}    |    cancelled api/member DELETE    |    error: member not found`);
        return res.status(404).json({ message: 'Member not found' });
      }

      await db.collection('tour').updateOne(
        { _id: tourResult._id },
        { $inc: { members_count: -1 } }
       );

      res.status(200).json({message: "Member successfully deleted"});
      console.log(`ip: ${clientIp}    |    accepted api/member DELETE    |    success: Member deleted and tour updated: ${tourResult._id} ${tourResult.name} ${tourResult.description} ${tourResult.location}`);

    } catch (error) {
      console.log(`ip: ${clientIp}    |    cancelled api/member DELETE    |    undefined error: ${error}`);
      res.status(500).json({ error: 'Unable to delete member' });
    }

  } else if (req.method === 'GET') {
    // deprecated. Use get_member with POST instead
      
      try {

        const schema = Joi.object({
          name: Joi.string().regex(/^[a-zA-Z0-9\s]+$/).min(3).max(100).required(),
          telephone: Joi.string().pattern(/^\+?[0-9\s]+$/).required(), // plus
          city: Joi.string().regex(/^[a-zA-Z0-9\s]+$/).min(2).max(100).required(),
        });
        const { error, value } = schema.validate(req.body);
  
        if (error) {
          res.status(400).json({message: error.details[0].message});
          return;
        }
  
        // const { name, telephone, city, groupName, tourName } = req.body;
        const sanitizedData = {
          name: xss(value.name),
          telephone: xss(value.telephone),
          city: xss(value.city),
        };
  
        const { name, telephone, city } = sanitizedData;
        console.log(sanitizedData);
        const searchQuery: any = {};
        if (name) searchQuery.name = { $regex: name as string, $options: 'i' };
        if (telephone) searchQuery.telephone = { $regex: telephone as string, $options: 'i' };
        if (city) searchQuery.city = { $regex: city as string, $options: 'i' };
        // const client = await clientPromise;
        // const db = client.db('yfp_berlin_2024');
        const result = await db.collection('member').find(searchQuery).toArray();

        if (!result) {
          res.status(404).json({message: "Member not found. Nothing deleted."});
        }

        // const deletion = await db.delete

        res.status(200).json(result);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to get member' });
      }
  
  
  
    

  } else {
    res.setHeader('Allow', ['POST', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
