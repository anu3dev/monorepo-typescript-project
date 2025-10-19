import React from 'react';
import { EmployeeRegistrationFormInputField } from './EmployeeRegistrationFormInputField';

type DetailsEmploymentProps = {
  formDetails: {
    location?: string;
    company?: string;
  };
  handleFormValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  pageHasError: boolean | false;
};
export const DetailsEmployment = ({
  formDetails,
  handleFormValue,
  pageHasError,
}: DetailsEmploymentProps) => {
  return (
    <div className="details-employment">
      <EmployeeRegistrationFormInputField
        pageHasError={pageHasError || false}
        fieldName={formDetails.location || ''}
        handleFormValue={handleFormValue}
        inputFieldName="location"
        inputLabelName="Job location:"
      />
      <EmployeeRegistrationFormInputField
        pageHasError={pageHasError || false}
        fieldName={formDetails.company || ''}
        handleFormValue={handleFormValue}
        inputFieldName="company"
        inputLabelName="Company name:"
      />
    </div>
  );
};
