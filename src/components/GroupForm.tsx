import React, { useContext, useState } from 'react';

import { Group } from 'Resources';

import { MessageContext } from './MessageProvider';

// import { MessageContext } from '@/app/[locale]/subscribe/page';

interface GroupFormProps {
    tour: Group;
    onCancel: () => void;
    onSubmit: (formData: { name: string; telephone: string; city: string; }) => void;
}

const GroupForm: React.FC<GroupFormProps> = ({ tour: group, onCancel, onSubmit }) => {
  const {intl} = useContext(MessageContext);
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [city, setCity] = useState('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logik zum Hinzufügen eines neuen Mitglieds zur Gruppe hier
    
    console.log({ name, telephone, city });
    onSubmit({ name, telephone, city })
  };

  return (
    <div className="group__formcontainer">
      <h3>{intl.formatMessage({ id: "subscribe.form.joinTour" })}</h3>
      <form onSubmit={handleSubmit} className='group__form'>
        <div className="group__forminput">
          <label htmlFor="name">{intl.formatMessage({ id: "subscribe.form.name" })}</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="group__forminput">
          <label htmlFor="telephone">{intl.formatMessage({ id: "subscribe.form.telephone" })}</label>
          <input 
            type="tel" 
            id="telephone" 
            value={telephone} 
            onChange={(e) => setTelephone(e.target.value)} 
            required 
          />
        </div>
        <div className="group__forminput">
          <label htmlFor="city">{intl.formatMessage({ id: "subscribe.form.city" })}</label>
          <input 
            type="text" 
            id="city" 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
            required 
          />
        </div>
        <div className='group__formbuttons'>
            <button type="submit" className='button submit'>{intl.formatMessage({ id: "subscribe.form.joinTour" })}</button>
            <button type="button" className='button cancel'onClick={onCancel}>
            {intl.formatMessage({ id: "subscribe.form.cancel" })}
            </button>
        </div>
        
        
      </form>
    </div>
  );
};

export default GroupForm;