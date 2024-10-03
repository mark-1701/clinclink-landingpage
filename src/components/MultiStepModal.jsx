import React, { useRef, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
// componentes propios
import Welcome from './Welcome';
import Specialization from './Specialization';
import ScheduleData from './ScheduleData';
import Summary from './Summary';
import { postData } from '../data/api';

const MultiStepModal = () => {
  const toast = useRef(null);
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [processObject, setProcessObject] = useState({});

  // * manejo de envío de información
  const handleSubmitAccept = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Confirmado',
      detail: 'Acción confirmada',
      life: 3000
    });
    setTimeout(() => {
      const fetchData = async () => {
        try {
          const formData = new FormData();
          formData.append('room_id', processObject?.room_id);
          formData.append('appointment_status_id', 1);
          // ! aqui debe de rellenarse con el id del login
          formData.append('patient_id', 2);
          formData.append('doctor_id', processObject?.doctor_id);
          formData.append('start_timestamp', processObject?.start_timestamp);
          formData.append('end_timestamp', processObject?.end_timestamp);
          await postData('appointment', formData);
          toast.current.show({
            severity: 'success',
            summary: 'Confirmado',
            detail: 'Cita registrada',
            life: 3000
          });
        } catch (err) {
          toast.current.show({
            severity: 'error',
            summary: 'Error Message',
            detail: 'Error en la consulta',
            life: 3000
          });
        }
      };
      fetchData();
      closeModal();
    }, 1000);
  };

  const handleSubmitReject = () => {
    toast.current.show({
      severity: 'warn',
      summary: 'Cancelado',
      detail: 'Acción cancelada',
      life: 3000
    });
  };

  const confirmAction = () => {
    confirmDialog({
      message: '¿Estás seguro de que deseas continuar?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: handleSubmitAccept,
      reject: handleSubmitReject
    });
  };

  const steps = [
    {
      title: 'Bienvenido',
      content: <Welcome />
    },
    {
      title: 'Elige la especialidad',
      content: (
        <Specialization
          processObject={processObject}
          setProcessObject={setProcessObject}
        />
      )
    },
    {
      title: 'Escoge la fecha',
      content: (
        <ScheduleData
          processObject={processObject}
          setProcessObject={setProcessObject}
        />
      )
    },
    {
      title: 'Resumen',
      content: (
        <Summary
          processObject={processObject}
          setProcessObject={setProcessObject}
        />
      )
    }
  ];

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const closeModal = () => {
    setVisible(false);
    setStep(0); // Reiniciar a paso 1 al cerrar el modal
  };

  return (
    <div>
      <Toast ref={toast} position="top-right" />
      <Button
        label="Agenda tu cita"
        icon="pi pi-external-link"
        className='btn'
        onClick={() => setVisible(true)}
      />

      <Dialog
        header={steps[step].title}
        visible={visible}
        className="w-3/6 min-w-[700px] h-[90%]"
        modal
        onHide={closeModal}
        footer={
          <div>
            <Button
              label="Anterior"
              icon="pi pi-arrow-left"
              onClick={prevStep}
              disabled={step === 0}
              className="btn"
            />
            <Button
              label={step === steps.length - 1 ? 'Agendar' : 'Siguiente'}
              icon="pi pi-arrow-right"
              onClick={() => {
                // * se ejecuta en el penúltimo paso
                if (step === steps.length - 2) {
                  // ?? mensaje de error si el usuario no selecciona rango de tiempos
                  if (
                    !processObject?.start_timestamp ||
                    !processObject?.end_timestamp
                  ) {
                    toast.current.show({
                      severity: 'error',
                      summary: 'Error Message',
                      detail: 'Debes de seleccionar un rango de fechas',
                      life: 3000
                    });
                  } else {
                    nextStep();
                  }
                } else if (step === steps.length - 1) {
                  confirmAction();
                } else {
                  nextStep();
                }
              }}
              className="btn"
            />
          </div>
        }
      >
        <div>{steps[step].content}</div>
      </Dialog>
      <ConfirmDialog />
    </div>
  );
};

export default MultiStepModal;
