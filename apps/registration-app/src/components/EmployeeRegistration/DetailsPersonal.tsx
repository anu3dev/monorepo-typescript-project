import React from 'react';
import { EmployeeRegistrationFormInputField } from './EmployeeRegistrationFormInputField';

type DetailsPersonalProps = {
  formDetails: {
    name?: string;
    placeOfBirth?: string;
    city?: string;
  };
  handleFormValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  pageHasError?: boolean | false;
  fieldType?: string | '';
};

export const DetailsPersonal = ({
  formDetails,
  handleFormValue,
  pageHasError,
}: DetailsPersonalProps) => {
  return (
    <div className="details-personal">
      <EmployeeRegistrationFormInputField
        pageHasError={pageHasError || false}
        fieldName={formDetails.name || ''}
        handleFormValue={handleFormValue}
        inputFieldName="name"
        inputLabelName="Your name:"
      />
      <EmployeeRegistrationFormInputField
        pageHasError={pageHasError || false}
        fieldName={formDetails.placeOfBirth || ''}
        handleFormValue={handleFormValue}
        inputFieldName="placeOfBirth"
        inputLabelName="Birth place:"
      />
      <EmployeeRegistrationFormInputField
        pageHasError={pageHasError || false}
        fieldName={formDetails.city || ''}
        handleFormValue={handleFormValue}
        inputFieldName="city"
        inputLabelName="Current city:"
      />
    </div>
  );
};
