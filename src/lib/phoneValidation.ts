import type { FormEvent } from "react";

export const phoneValidationProps = {
  inputMode: "numeric" as const,
  minLength: 10,
  maxLength: 10,
  pattern: "[0-9]{10}",
  title: "Please enter exactly 10 digits.",
  onInput: (event: FormEvent<HTMLInputElement>) => {
    event.currentTarget.value = event.currentTarget.value.replace(/\D/g, "").slice(0, 10);
  },
};
