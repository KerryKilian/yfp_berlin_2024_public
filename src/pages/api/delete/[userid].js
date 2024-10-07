// pages/api/member/delete/[userid].js
import clientPromise from 'lib/mongodb';
import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';



export default async function handler(req, res) {
    const client = await clientPromise;
  const db = client.db('yfp_berlin_2024');
  if (req.method === 'DELETE') {
    // Extrahiere die userId aus der URL
    const { userid } = req.query;

    if (!userid) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    try {
      const collection = db.collection('member');
        const result = await collection.deleteOne({ _id: new ObjectId(userid) });

      if (result.deletedCount > 0) {
        res.status(200).json({ message: 'Member deleted successfully' });
      } else {
        res.status(404).json({ message: 'Member not found' });
      }
    } catch (error) {
      console.error('Error deleting member:', error);
      res.status(500).json({ message: 'Error deleting member' });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


