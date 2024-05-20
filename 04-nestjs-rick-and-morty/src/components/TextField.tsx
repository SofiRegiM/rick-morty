import React from 'react';


interface TextFieldProps {
    dataTestId: string;
    as: string;
}

const TextField: React.FC<TextFieldProps> = ({ dataTestId, as }) => {
    return <input type={as} data-testid={dataTestId} />;
};

export default TextField;