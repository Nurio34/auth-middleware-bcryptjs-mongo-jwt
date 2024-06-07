import React from "react";

type Props = {
    value: string;
    isFormValid: boolean;
};

function SubmitButton(props: Props) {
    const { value, isFormValid } = props;

    return (
        <button
            type="submit"
            disabled={!isFormValid}
            className="btn btn-sm btn-secondary disabled:btn-base-300"
        >
            {value}
        </button>
    );
}

export default SubmitButton;
