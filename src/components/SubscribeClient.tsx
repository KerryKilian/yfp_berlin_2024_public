"use client";
import { useEffect, useState, useReducer } from 'react';
import { Tour } from 'Resources';
import { MessageContext } from '@/contexts/MessageProvider';
import TourContainer from '@/components/TourContainer';
import { getIntl } from '@/lib/intl';

interface SubscribeClientProps {
  initialTours: Tour[];
  locale: string;
}

const messageReducer = (state, action) => {
  switch (action.type) {
    case 'FORM_SUBMIT':
      return { message: "Saving...", success: false, showForm: true, error: false };
    case 'SUBMIT_SUCCESS':
      return { message: "Teilnehmer wurde erfolgreich hinzugefügt.", success: true, showForm: false, error: false };
    case 'SUBMIT_ERROR':
      return { message: action.error, success: true, showForm: false, error: true };
    case 'CANCEL':
      return { message: "", success: false, showForm: false, error: false };
    case 'SHOW_FORM':
      return { ...state, showForm: true };
    case 'HIDE_FORM':
      return { ...state, showForm: false };
    default:
      return state;
  }
};

export default function SubscribeClient({ initialTours, locale }: SubscribeClientProps) {
  const [tours, setTours] = useState<Tour[]>(initialTours); // ← Keine API Call im useEffect!
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [messageState, dispatch] = useReducer(messageReducer, {
    message: "",
    success: false,
    showForm: false,
    error: false
  });
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
    dispatch({ type: 'CANCEL' });
    setSelectedTour(null);
    setTours(initialTours);
  };

  async function handleSubmit(formData: { name: string; telephone: string; city: string }): Promise<void> {
    dispatch({ type: 'FORM_SUBMIT' });
    
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
          tourName: selectedTour!.name 
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        console.log("RESPOSNE WAR NICHT ERFOLGREICH");
        console.log(data);
        dispatch({ type: 'SUBMIT_ERROR', error: data.message });
        return;
      }

      if (data == undefined || data == null) {
        dispatch({ type: 'SUBMIT_ERROR', error: "Teilnehmer konnte nicht hinzugefügt werden." });
      } else {
        dispatch({ type: 'SUBMIT_SUCCESS' });
      }
    } catch (error) {
      dispatch({ type: 'SUBMIT_ERROR', error: error.message });
    }
  };
  
  return (
    <MessageContext.Provider value={{ 
      message: messageState.message, 
      success: messageState.success, 
      handleCancel, 
      setShowForm: (show: boolean) => dispatch({ type: show ? 'SHOW_FORM' : 'HIDE_FORM' }), 
      showForm: messageState.showForm, 
      error: messageState.error, 
      intl 
    }}>
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