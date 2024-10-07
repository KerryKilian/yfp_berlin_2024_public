"use client";
import { useEffect, useState } from "react";

import { LinearProgress } from "@mui/material";
import { Tour } from "Resources";

import { MessageContext } from "@/components/MessageProvider";
import TourContainer from "@/components/TourContainer";

import { getIntl } from "@/lib/intl";

interface TourProps {
  params: {locale: string}
}


// export const MessageContext = createContext<MessageType | >();

export default function Subscribe({ params }: TourProps) {
// const Subscribe: React.FC<TourProps> = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean>(false); // true if there was an error in response
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false); // shows if a fetch was made. Does not need to be successful
  // const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [intl, setIntl] = useState<any>(null);

  useEffect(() => {
    async function loadTranslations() {
      const loadedIntl = await getIntl(params.locale);
      setIntl(loadedIntl);
    }
    loadTranslations();
  }, [params.locale]);


    // search for group and tour, that the user clicked on
  const handleGroupSelect = (givenTour: Tour) => {
    // let result: Group | undefined = undefined;
      for (let tour of tours) {
          // result = tour.groups.find(group => group.name.toLowerCase() === givenGroup.name.toLowerCase());
          if (tour.name === givenTour.name) {
            setSelectedTour(tour);
            break;
          }
          // if (result) {
          //   setSelectedTour(tour);
          //   // setSelectedGroup(result); // here must be result and not group
          //   break;
          // }
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


  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('/api/tour');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTours(data);
        console.log(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, [selectedTour]);

  if (loading) return <LinearProgress color="success" />;
  // if (error) return <div>Error: {error}</div>;
  return (
    <MessageContext.Provider value={{ message, success, handleCancel, setShowForm, showForm, error, intl }}>
    <div className="page">
      <h1>{intl.formatMessage({ id: "subscribe.title" })}</h1>
      <p>{intl.formatMessage({ id: "subscribe.description" })}</p>
      <div className="tours">
        {selectedTour ? (
            <TourContainer tour={selectedTour!} key={selectedTour!.name} onGroupSelect={handleGroupSelect} usersSelectedTour={selectedTour} onSubmit={handleSubmit} onCancel={handleCancel}></TourContainer>
        ) : (
          tours.map((tour) => (
          <TourContainer tour={tour} key={tour.name} onGroupSelect={handleGroupSelect} usersSelectedTour={null} onSubmit={handleSubmit} onCancel={handleCancel}></TourContainer>
        ))
      )}
      </div>
      
    </div>
    </MessageContext.Provider>
  );
}



// export default Subscribe;