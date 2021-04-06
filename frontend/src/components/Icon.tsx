import { ReactElement } from "react";
import { IconContext } from "react-icons/lib";
import { RiAlertLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { BiPlus, BiReset, BiTrash } from "react-icons/bi";

interface ButtonFormProps {
  type?: string;
  styles?: IconContext;
}

interface SwitchIconProps {
  type?: string;
  children: ReactElement<HTMLButtonElement>[];
}

const Switch = (props: SwitchIconProps): any => {
  const { type, children } = props;
  return children.find((child: any) => {
    return child.props.id === type;
  });
};

export default function Icon({
  type = "",
  styles = {}
}: ButtonFormProps): ReactElement {
  return (
    <IconContext.Provider value={styles}>
      <Switch type={type}>
        <span id="plus">
          <BiPlus />
        </span>
        <span id="reset">
          <BiReset />
        </span>
        <span id="trash">
          <BiTrash />
        </span>
        <span id="check">
          <FaCheck />
        </span>
        <span id="alert">
          <RiAlertLine />
        </span>
      </Switch>
    </IconContext.Provider>
  );
}
