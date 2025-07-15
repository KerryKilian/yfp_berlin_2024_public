import SubscribeClient from '@/components/SubscribeClient';
import { getIntl } from '@/lib/intl';
import clientPromise from 'lib/mongodb';

interface SubscribeProps {
  params: {locale: string}
}

export default async function Subscribe({ params }: SubscribeProps) {
  const { locale } = params;
  const intl = await getIntl(locale);
  
  // Direkte DB-Abfrage - kein HTTP-Call nötig!
  try {
    const client = await clientPromise;
    const db = client.db('yfp-2024-db');
    const toursData = await db.collection('tour').find({}).toArray();
    
    // MongoDB ObjectIds zu Strings konvertieren
    const initialTours = toursData.map(tour => ({
      ...tour,
      _id: tour._id.toString()
    }));

    return (
      <div className="page">
        <h1>{intl.formatMessage({ id: "subscribe.title" })}</h1>
        <p>{intl.formatMessage({ id: "subscribe.description" })}</p>
        
        <SubscribeClient 
          initialTours={initialTours}
          locale={locale}
        />
      </div>
    );
  } catch (error) {
    console.error('Failed to fetch tours:', error);
    
    // Fallback: Leeres Array oder Error-UI
    return (
      <div className="page">
        <h1>{intl.formatMessage({ id: "subscribe.title" })}</h1>
        <p>Touren sind nicht vorhanden.</p>
      </div>
    );
  }
}
