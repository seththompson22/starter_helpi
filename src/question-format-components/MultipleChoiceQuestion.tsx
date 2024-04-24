import { Form } from "react-bootstrap";
import "../styles/MultipleChoiceQuestion.css";

interface QuestionOptionProps {
  choices: string[];
  selectedChoice: string;
  onSelectChoice: (choice: string) => void;
  disabled?: boolean;
}

const MultipleChoiceQuestion: React.FC<QuestionOptionProps> = ({
  choices,
  selectedChoice,
  onSelectChoice,
  disabled,
}) => {
  const handleChoiceChange = (choice: string) => {
    onSelectChoice(choice);
  };

  return (
    <Form.Group controlId="questionOptions">
      {choices.map((choice, index) => (
        <Form.Check
          key={index}
          type="radio"
          label={choice}
          name="choices"
          value={choice}
          checked={selectedChoice === choice}
          onChange={() => handleChoiceChange(choice)}
          disabled={disabled}
          id={`option-${index}`}
        />
      ))}
    </Form.Group>
  );
};

export default MultipleChoiceQuestion;
