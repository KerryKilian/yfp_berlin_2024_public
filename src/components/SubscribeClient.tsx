"use client";
import { useEffect, useState } from 'react';
import { Tour } from 'Resources';
import { MessageContext } from '@/contexts/MessageProvider';
import TourContainer from '@/components/TourContainer';
import { getIntl } from '@/lib/intl';

interface SubscribeClientProps {
  initialTours: Tour[];
  locale: string;
}

export default function SubscribeClient({ initialTours, locale }: SubscribeClientProps) {
  const [tours, setTours] = useState<Tour[]>(initialTours); // ← Keine API Call im useEffect!
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [intl, setIntl] = useState<any>(undefined);

  useEffect(() => {
      async function loadTranslations() {
        const loadedIntl = await getIntl(locale);
        setIntl(loadedIntl);
      }
      loadTranslations();
    }, [locale]);

// search for group and tour, that the user clicked on
  const handleGroupSelect = (givenTour: Tour) => {
    for (let tour of tours) {
        if (tour.name === givenTour.name) {
          setSelectedTour(tour);
          break;
        }
    }
  };

  const handleCancel = () => {
    console.log("cancel");
    setSuccess(false);
    setMessage("");
    setError(false);
    setSelectedTour(null);
    // setSelectedGroup(null);
    setTours([]);
  };

  async function handleSubmit(formData: { name: string; telephone: string; city: string }): Promise<void> {
    // console.log('selectedGroup: ' + selectedGroup!.name);
    try {
      
      const response = await fetch('/api/member', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name: formData.name, 
          telephone: formData.telephone, 
          city: formData.city, 
          // groupName: selectedGroup!.name,
          tourName: selectedTour!.name 
        }),
      });

      
      const data = await response.json();
      if (!response.ok) {
        console.log("RESPOSNE WAR NICHT ERFOLGREICH");
        console.log(data)
        setMessage(data.message);
        setSuccess(true);
        setError(true);
        return;

      }


      if (data == undefined || data == null) {
        setMessage("Teilnehmer konnte nicht hinzugefügt werden.");
        setSuccess(true);
        setError(true);
      } else {
        setMessage(`Teilnehmer wurde erfolgreich hinzugefügt.`);
        setSuccess(true);
        setError(false);
      }
    } catch (error) {
      setMessage(error.message);
      setSuccess(true);
      setError(true);
    }
  };
  
  return (
    <MessageContext.Provider value={{ message, success, handleCancel, setShowForm, showForm, error, intl }}>
      <div className="tours">
        {selectedTour ? (
          <TourContainer tour={selectedTour} key={selectedTour.name} onGroupSelect={handleGroupSelect} usersSelectedTour={selectedTour} onSubmit={handleSubmit} onCancel={handleCancel} />
        ) : (
          tours.map((tour) => (
            <TourContainer tour={tour} key={tour.name} onGroupSelect={handleGroupSelect} usersSelectedTour={null} onSubmit={handleSubmit} onCancel={handleCancel} />
          ))
        )}
      </div>
    </MessageContext.Provider>
  );
}