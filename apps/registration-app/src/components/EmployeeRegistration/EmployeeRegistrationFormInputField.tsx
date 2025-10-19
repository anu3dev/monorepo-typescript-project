import React from 'react';

type EmployeeRegistrationFormInputFieldProps = {
  pageHasError: boolean;
  fieldName: string;
  handleFormValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const EmployeeRegistrationFormInputField = ({
  pageHasError,
  fieldName,
  handleFormValue,
}: EmployeeRegistrationFormInputFieldProps) => {
  return (
    <div
      className={`employee-registration__input ${pageHasError && !fieldName ? 'employee-registration__input-error' : ''}`}
    >
      <div className="employee-registration__input__label">
        <span>Your name:</span>
        {pageHasError && !fieldName && (
          <span className="employee-registration__error">
            {` please fix the error`}
          </span>
        )}
      </div>
      <input
        type="text"
        name="name"
        value={fieldName}
        onChange={handleFormValue}
      />
    </div>
  );
};
