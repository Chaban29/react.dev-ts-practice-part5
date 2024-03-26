import { ChangeEvent, FC, FormEvent, useState } from 'react';

type TypeTextareaValue = string;
type TypeStatuses = 'sending' | 'sent' | 'typing';

export const FeedbackForm: FC = () => {
  const [text, setText] = useState<TypeTextareaValue>('');
  const [status, setStatus] = useState<TypeStatuses>('typing');

  const handleChangeAreaValue = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    return setText(event.target.value);
  };

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    await handleSubmit(text);
    setStatus('sent');
  };

  const isSending = status === 'sending';
  const isSent = status === 'sent';

  if (isSent) return <h1>Thank's fro feedback!</h1>;

  return (
    <form onSubmit={handleSubmitForm}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={handleChangeAreaValue}
      ></textarea>
      <br />
      <button disabled={isSending} type='submit'>
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
};

const handleSubmit = (text: TypeTextareaValue): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1500);
  });
};
