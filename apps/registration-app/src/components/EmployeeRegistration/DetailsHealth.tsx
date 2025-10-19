import React from 'react';
import { EmployeeRegistrationFormInputField } from './EmployeeRegistrationFormInputField';

type DetailsHealthProps = {
  formDetails: {
    insuranceProvider?: string;
    bloodgroup?: string;
  };
  handleFormValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  pageHasError: boolean | false;
};

export const DetailsHealth = ({
  formDetails,
  handleFormValue,
  pageHasError,
}: DetailsHealthProps) => {
  return (
    <div className="details-health">
      <EmployeeRegistrationFormInputField
        pageHasError={pageHasError || false}
        fieldName={formDetails.insuranceProvider || ''}
        handleFormValue={handleFormValue}
      />
      <EmployeeRegistrationFormInputField
        pageHasError={pageHasError || false}
        fieldName={formDetails.bloodgroup || ''}
        handleFormValue={handleFormValue}
      />
    </div>
  );
};
