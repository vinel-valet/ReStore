import React, {useContext} from 'react';
import MyContext from '../bookstore-service-context/bookstore-service-context';

const withBookstoreService = () => (Wrapped) => {

  return (props) => {
         const bookstoreService = useContext(MyContext)
            return (<Wrapped {...props}
                             bookstoreService={bookstoreService}/>);
  }
};

export default withBookstoreService;