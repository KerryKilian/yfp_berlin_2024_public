import React, { useContext } from 'react';
import { FaPen  } from 'react-icons/fa';
import Link from 'next/link';

import { LinearProgress } from '@mui/material';
import { Tour } from 'Resources';

import GroupForm from './GroupForm';
import { MessageContext } from '../contexts/MessageProvider';

// import { MessageContext } from '@/app/[locale]/subscribe/page';

interface TourContainerProps {
    tour: Tour;
    onGroupSelect: (tour: Tour) => void; // Fix: Proper function signature instead of generic Function
    usersSelectedTour: Tour | null;
    onSubmit: (formData: { name: string; telephone: string; city: string; }) => void;
    onCancel: () => void;
}

const TourContainer: React.FC<TourContainerProps> = ({ tour, onGroupSelect, usersSelectedTour: usersSelectedTour, onSubmit, onCancel }) => {
  const {message, success, handleCancel, setShowForm, showForm, error, intl} = useContext(MessageContext);

  const isDisabled = tour.members_count >= 70;
    // const [showForm, setShowForm] = useState(false);
    const handleButtonClick = () => {
        if (!isDisabled) {
            onGroupSelect(tour);
            setShowForm(true);
        }
        
    }

    const onCancelClick = () => {
        setShowForm(false);
        onCancel();

    }


    if (!intl) {
        return <LinearProgress color="success" />
    }
  return (
    <div className='tour'>
        <h3>{intl.formatMessage({ id: "tour." + tour.name })}</h3>
        <i><p>{tour.members_count} {intl.formatMessage({ id: "subscribe.members" })}</p></i>
        <i>{tour.members_count >= 70 ? (<p>There are already 70 members in this tour. A group cannot have more than 70 members. Please register for another group.</p>) : null}</i>
        <i><p>{intl.formatMessage({ id: "subscribe.start" })}: {tour.start}</p></i>
        <Link href={tour.location}>
        <button className='button submit'>Google Maps</button></Link>
        {/* <a href={tour.location}>{tour.location}</a> */}
        <p>{intl.formatMessage({ id:"tour." + tour.description })}</p>
        {/* <GroupContainer tour={tour} onGroupSelect={onGroupSelect} usersSelectedTour={usersSelectedTour} onSubmit={onSubmit} onCancel={onCancel}/> */}
        {/* <GroupContainer group={tour.groups[1]} onGroupSelect={onGroupSelect} usersSelectedGroup={usersSelectedGroup} onSubmit={onSubmit} onCancel={onCancel}/> */}
        <div className="group">
        {/* <div className='group__text'>
                 <h4>{tour.name}</h4> 
                
            </div> */}
        
        {/* Fix: Use null instead of empty fragment for better React practices */}
        {/* Note: Controlled components use state to manage input values, allowing real-time validation and formatting */}
        {/* Uncontrolled components use refs to access values only when needed (like onSubmit) */}
        {usersSelectedTour != null ? null : <div className={`group__button iconbutton ${isDisabled ? "disabled" : ''}`} onClick={handleButtonClick}>
            <FaPen className='group__icon' color='black' width={50} height={50}/>
        </div>}
        
        
        {showForm && success == false && message == "" && usersSelectedTour?.name == tour.name && <GroupForm tour={tour} onCancel={onCancelClick} onSubmit={onSubmit} />}
    </div>
        {/* {success && error == false && <FaCheck className='group__icon' color='green' width={100} height={100}/>}<br></br>
        {success && error == true && <FaSkullCrossbones  className='group__icon' color='red' width={100} height={100}/>}<br></br> */}
        {
            success && <p className={`message ${error ? "error" : "success"}`}>{success && message}</p>
        }
        
        {success && <button className='button submit' onClick={onCancel}>Zurück</button>}<br></br>
    </div>
  );
};
  
export default TourContainer;