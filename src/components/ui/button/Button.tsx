import './button.css';

interface ButtonProps {
    text: string;
    color: string;
    onClick: () => void;
}

export default function Button({ text, color, onClick }: ButtonProps) {
    return (
        <button className={color} onClick={onClick}>
            {text}
        </button>
    );
};