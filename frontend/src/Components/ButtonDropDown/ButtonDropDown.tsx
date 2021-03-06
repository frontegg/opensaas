import React, { useMemo } from 'react';
import {
  ButtonDropdown as ReactstrapButtonDropdown,
  DropdownToggle as ReactstrapDropdownToggle,
  DropdownMenu as ReactstrapDropdownMenu,
  DropdownItem as ReactstrapDropdownItem,
} from 'reactstrap';

interface ButtonDropDownProps extends React.HTMLAttributes<HTMLElement> {
  label: string;
  items: string[];
}

const ButtonDropDown = (props: ButtonDropDownProps): React.ReactNode => {
  const { items, label } = props;
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen((prev) => !prev);

  const dropdownItemElements = useMemo(
    () =>
      items.map((item: string, index: number) => <ReactstrapDropdownItem key={index}>{item}</ReactstrapDropdownItem>),
    [items],
  );

  return (
    <ReactstrapButtonDropdown isOpen={open} toggle={toggle}>
      <ReactstrapDropdownToggle caret>{label}</ReactstrapDropdownToggle>
      <ReactstrapDropdownMenu>{dropdownItemElements}</ReactstrapDropdownMenu>
    </ReactstrapButtonDropdown>
  );
};

export default ButtonDropDown;
