"use client";
import React, { useContext } from 'react';
import { FaPen } from "react-icons/fa";

import { Tour } from 'Resources';

import GroupForm from './GroupForm';
import { MessageContext } from './MessageProvider';

// import { MessageContext } from '@/app/[locale]/subscribe/page';


interface GroupProps {
    tour: Tour;
    onGroupSelect: Function;
    usersSelectedTour: Tour | null;
    onCancel: () => void;
    onSubmit: (formData: { name: string; telephone: string; city: string; }) => void;
}

const GroupContainer: React.FC<GroupProps> = ({ tour, onGroupSelect, usersSelectedTour: usersSelectedTour, onCancel, onSubmit }) => {
    const isDisabled = tour.members_count >= 38;
    const {message, success, setShowForm, showForm, intl} = useContext(MessageContext);
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



  return (
    <div className="group">
        <div className='group__text'>
                <h4>{intl.formatMessage({ id: tour.name })}</h4>
                <p>{tour.members_count} Teilnehmer</p>
            </div>
        
        {/* dont show the icon if user clicked on a group*/}
        {usersSelectedTour != null ? <></>: <div className={`group__button iconbutton ${isDisabled ? "disabled" : ''}`} onClick={handleButtonClick}>
            <FaPen className='group__icon' color='black' width={50} height={50}/>
        </div>}
        
        
        {showForm && success == false && message == "" && usersSelectedTour?.name == tour.name && <GroupForm tour={tour} onCancel={onCancelClick} onSubmit={onSubmit} />}
    </div>
  );
};
  
export default GroupContainer;