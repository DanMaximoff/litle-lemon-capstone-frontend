
interface FormFieldProps {
    children: React.ReactNode;
    label: string;
    htmlFor: string;
    hasError: boolean;
    errorMessage: string;
    hasHint?: boolean;
    hintMessage?: string;
}

export default function FormField({ children, label, htmlFor, hasError, errorMessage, hasHint, hintMessage }: FormFieldProps) {
    return (
        <div className="form-field">
            <label htmlFor={htmlFor}>{label}</label>
            {children}
            {hasError && errorMessage ?
            <p className="error" data-testid="error-message">{errorMessage}</p> : null}
            {hasHint ?
                <details className="hint" data-hint-id="hint-message">
                <summary>Hint</summary>
                {hintMessage}
                </details> : null}
        </div>
    );
};