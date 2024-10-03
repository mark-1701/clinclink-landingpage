import { Card } from 'primereact/card';

const Summary = ({ processObject, setProcessObject }) => {
  return (
    <Card>
      <p>
        <b>Especialización: </b>{' '}
        {processObject?.specialization_name ? (
          processObject?.specialization_name
        ) : (
          <span className="text-red-600">N/A</span>
        )}
      </p>
      <p>
        <b>Fecha de Inicio: </b> {processObject?.start_timestamp}
      </p>
      <p>
        <b>Fecha de Final: </b> {processObject?.end_timestamp}
      </p>
      <p className="text-red-600">
        *Nota: Fijate bien si es el dia y hora seleccionado correctamente
      </p>
    </Card>
  );
};

export default Summary;
