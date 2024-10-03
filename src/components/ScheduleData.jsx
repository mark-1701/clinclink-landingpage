import React, { useEffect, useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { postData } from '../data/api';

export default function ScheduleData({ processObject, setProcessObject }) {
  const [date, setDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState({
    start: '',
    end: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      if (date) {
        const formData = new FormData();
        // solo envia el id de especializacion cuando se encuentra
        const specializationId = processObject?.specialization_id;
        specializationId &&
          formData.append('specialization_id', specializationId);

        formData.append('start_timestamp', `${convertDate(date)} 00:00:00`);
        formData.append('end_timestamp', `${convertDate(date)} 23:59:59`);
        const availableAppointments = await postData(
          'appointment/available-appointments-by-doctor-and-room',
          formData
        );
        setAvailableTimes(availableAppointments?.data);
      }
    };

    fetchData();
  }, [date]);
  useEffect(() => {
    setProcessObject({
      ...processObject,
      start_timestamp: selectedTimeSlot?.start,
      end_timestamp: selectedTimeSlot?.end,
      room_id: selectedTimeSlot?.room_id,
      doctor_id: selectedTimeSlot?.doctor_id
    });
  }, [selectedTimeSlot]);

  // * funciones para convertir los formatos de fecha y hora de forma simple
  const convertDate = date => {
    // "2024-10-05"
    return new Date(date).toISOString().split('T')[0];
  };

  const convertTime = timestamp => {
    // 00:00:00
    return timestamp.split(' ')[1];
  };

  return (
    <div>
      <div className="flex justify-between mb-20">
        <Calendar
          value={date}
          onChange={e => setDate(e.value)}
          className="custom-calendar"
          inline
          showWeek
        />

        {/* Listado de horarios como formulario */}
        <div className="flex flex-col items-end">
          <h2 className="mb-3">
            <b>Listado de horarios</b>
          </h2>

          <form>
            {availableTimes.length > 0 ? (
              availableTimes.map((timeSlot, index) => {
                // selcciona solamente el primer doctor y el cuarto
                const timeSlotValue = {
                  start: timeSlot?.start_timestamp,
                  end: timeSlot?.end_timestamp,
                  room_id: timeSlot?.rooms_id[0],
                  doctor_id: timeSlot?.doctors_id[0]
                };

                return (
                  <div key={index} className="flex align-items-center gap-2">
                    <input
                      type="radio"
                      id={`timeSlot-${index}`}
                      name="timeSlot"
                      value={JSON.stringify(timeSlotValue)}
                      checked={
                        selectedTimeSlot &&
                        selectedTimeSlot.start === timeSlotValue.start &&
                        selectedTimeSlot.end === timeSlotValue.end
                      }
                      onChange={e =>
                        setSelectedTimeSlot(JSON.parse(e.target.value))
                      }
                    />
                    <label htmlFor={`timeSlot-${index}`}>
                      {convertTime(timeSlot?.start_timestamp)} -{' '}
                      {convertTime(timeSlot?.end_timestamp)}
                    </label>
                  </div>
                );
              })
            ) : (
              <p className="text-red-600">Sin horarios</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
