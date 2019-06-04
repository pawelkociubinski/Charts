import { FormEvent } from "react";

export interface OnChange {
  (event: FormEvent<HTMLInputElement>): void
}

