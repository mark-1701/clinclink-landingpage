import React, { useEffect, useState } from 'react';
import { ListBox } from 'primereact/listbox';
import { getData } from '../data/api';

export default function Specialization({ processObject, setProcessObject }) {
  const [data, setData] = useState(null);
  const [selectedSpecialization, setselectedSpecialization] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const specializationData = await getData('specialization');
      const formattedData = specializationData.map(item => ({
        id: item.id,
        name: item.name.charAt(0).toUpperCase() + item.name.slice(1)
      }));
      setData(formattedData);
    };
    fetchData();
  }, []);
  useEffect(() => {
    setProcessObject({
      ...processObject,
      specialization_id: selectedSpecialization?.id,
      specialization_name: selectedSpecialization?.name
    });
  }, [selectedSpecialization]);

  return (
    <div>
      <p className='text-red-600 mb-3'>* Si solo necesitas un médico general, saltate este paso</p>
      <ListBox
        value={selectedSpecialization}
        onChange={e => setselectedSpecialization(e.value)}
        options={data}
        optionLabel="name"
        className="w-full"
      />
    </div>
  );
}
