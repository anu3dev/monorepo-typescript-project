import React from 'react';

type EmployeeRegistrationFormInputFieldProps = {
  pageHasError: boolean;
  fieldName: string;
  handleFormValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputFieldName: string;
  inputLabelName: string;
};

export const EmployeeRegistrationFormInputField = ({
  pageHasError,
  fieldName,
  handleFormValue,
  inputFieldName,
  inputLabelName,
}: EmployeeRegistrationFormInputFieldProps) => {
  return (
    <div
      className={`employee-registration__input ${pageHasError && !fieldName ? 'employee-registration__input-error' : ''}`}
    >
      <div className="employee-registration__input__label">
        <span>{inputLabelName}</span>
        {pageHasError && !fieldName && (
          <span className="employee-registration__error">
            {` please fix the error`}
          </span>
        )}
      </div>
      <input
        type="text"
        name={inputFieldName}
        value={fieldName}
        onChange={handleFormValue}
      />
    </div>
  );
};
