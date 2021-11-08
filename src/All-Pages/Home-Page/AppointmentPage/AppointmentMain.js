import  React,{useState} from 'react';
import AppointmentHeader from './AppointmentHeader';
import AppointmentShedule from './AppointmentHeader/AppointmentShedule';
const AppointmentMain = () => {
    const [value, onChange] = useState(new Date());
console.log(value.toLocaleDateString())
  return (
      <div>
     <AppointmentHeader onChange={onChange} value={value.toLocaleDateString()}/>
     <AppointmentShedule value={value.toLocaleDateString()}/>
    </div>
  )
};

export default AppointmentMain;