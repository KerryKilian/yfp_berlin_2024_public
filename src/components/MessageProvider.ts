import { createContext } from "react";

interface MessageType {
    message: string;
    success: boolean;
    handleCancel: () => void;
    setShowForm: (show: boolean) => void;
    showForm: boolean;
    error: boolean;
    intl: any;
  }
  
  // create context for return of api
  export const MessageContext = createContext<MessageType>({message: "", success: false, handleCancel: () => {}, setShowForm: (show) => {}, showForm: false, error: false, intl: {}});