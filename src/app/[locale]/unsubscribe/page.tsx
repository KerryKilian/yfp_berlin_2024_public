"use client";
import { useEffect, useState } from "react";
import { FaMapSigns } from "react-icons/fa";

import { LinearProgress } from "@mui/material";
import { Member } from "Resources";

import { getIntl } from "@/lib/intl";

interface UnsubscribeProps {
  params: {locale: string}
}


// const Unsubscribe: React.FC = () => {
export default function Unsubscribe({ params }: UnsubscribeProps) {

  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [results, setResults] = useState<Member[]>([]);
  const [intl, setIntl] = useState<any>(null);
  const [getWasMade, setGetWasMade] = useState<boolean>(false);

  useEffect(() => {
    async function loadTranslations() {
      const loadedIntl = await getIntl(params.locale);
      setIntl(loadedIntl);
    }
    loadTranslations();
  }, [params.locale]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();    
    
    try {
      // const response = await fetch(`/api/member?name=${name}&telephone=${telephone}&city=${city}`, {
      //   method: "DELETE"
      // });
      const response = await fetch('/api/get_member', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name: name, 
          telephone: telephone, 
          city: city, 
        }),
      });

      setResults(await response.json());
      setGetWasMade(true);
      // const data = await response.json();
      // setMessage(data.message);
      if (response.ok) {
        setError(false)
      } else {
        setError(true);
      }
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteMember = async (member: Member) => {
    try {
      // const response = await fetch(`/api/member?name=${name}&telephone=${telephone}&city=${city}`, {
      //   method: "DELETE"
      // });
      const response = await fetch('/api/member', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name: member.name, 
          telephone: member.telephone, 
          city: member.city, 
        }),
      });

      

      const data = await response.json();
      setMessage(data.message);
      if (response.ok) {
        setError(false)
        setResults((prevResults) => prevResults.filter((m) => m !== member));
      } else {
        setError(true);
      }
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  if (!intl) {
    return <div><LinearProgress color='success'/></div>
  }

  return (
    <div className="page">
      <h1>{intl.formatMessage({ id: "unsubscribe.title" })}</h1>
      <p>{intl.formatMessage({ id: "unsubscribe.description" })}</p>
      <div className="group__formcontainer tour">
      <form onSubmit={handleSubmit} className='group__form'>
        <div className="group__forminput">
          <label htmlFor="name">{intl.formatMessage({ id: "unsubscribe.form.name" })}</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="group__forminput">
          <label htmlFor="telephone">{intl.formatMessage({ id: "unsubscribe.form.telephone" })}</label>
          <input 
            type="tel" 
            id="telephone" 
            value={telephone} 
            onChange={(e) => setTelephone(e.target.value)} 
            required 
          />
        </div>
        <div className="group__forminput">
          <label htmlFor="city">{intl.formatMessage({ id: "unsubscribe.form.city" })}</label>
          <input 
            type="text" 
            id="city" 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
            required 
          />
        </div>
        {/* <div className='group__formbuttons'> */}
            <button type="submit" className='button submit'>{intl.formatMessage({ id: "unsubscribe.form.search" })}</button>
        {/* </div> */}

        
      </form>
      
      
    </div>
    {(results != null && results.length > 0) && <h3>{intl.formatMessage({ id: "unsubscribe.results.title" })}</h3>}
        {(results != null && results.length > 0) ? results.map((result, index) => (
          <div key={`${result.name}${result.telephone}${result.city}${index}`} className="member">
            <button className="button submit" onClick={() => deleteMember(result)}>{intl.formatMessage({ id: "unsubscribe.results.delete" })}</button>
            <div className="member_info">
              <p>{result.name}</p>
              <p>{result.telephone}</p>
              <p>{result.city}</p>
            </div>
            <div className="member__resultstour">
            <FaMapSigns />
            <i><p>{intl.formatMessage({ id: "tour." + result.tourName })}</p></i>
            </div>
            
            
          </div>
        )) : null}
    {/* <h2>Results</h2>
        <ul>
          {results.map((member) => (
            <li key={member._id}>
              {member.name} - {member.telephone} - {member.city}
            </li>
          ))}
        </ul> */}
        <div>
      {
            message && <p className={`message ${error ? "error" : "success"}`}>{message}</p>
        }
      </div>
      
    </div>
  );
}



// export default Unsubscribe;