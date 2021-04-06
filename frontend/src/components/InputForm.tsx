import { ReactElement } from "react";

export function InputForm({
  name,
  type,
  required
}: {
  name: string;
  type: string;
  required: boolean;
}): ReactElement {
  return (
    <div className="mb4 black-80">
      <label htmlFor={name} className="db fw6 lh-copy f6">
        {name}
        {required ? <span className="normal black-60"> *</span> : ""}
      </label>
      <input
        type={type}
        name={name}
        className="input-reset ba b--black-20 pa2 br2 mb2 db w-100"
      />
    </div>
  );
}
