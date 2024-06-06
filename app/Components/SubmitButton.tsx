import React from "react";

type Props = {
    isFormValid: boolean;
};

function SubmitButton(props: Props) {
    const { isFormValid } = props;

    return (
        <button
            type="submit"
            disabled={!isFormValid}
            className="btn btn-sm btn-secondary disabled:btn-base-300"
        >
            SubmitButton
        </button>
    );
}

export default SubmitButton;
