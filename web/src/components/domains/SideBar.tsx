import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideMenuLink from '../commons/atoms/SideMenuLink';

const SideBar: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = React.useCallback((_: React.MouseEvent<HTMLLIElement, MouseEvent> | React.SyntheticEvent<HTMLElement, Event>, data: string | undefined) => {
    if (data) navigate(data);
  },[navigate])

  return (
    <aside className="h-full w-full border border-r-gray-300 shadow-md lg:w-1/5">
      <h1
        className="mt-5 cursor-pointer text-center text-3xl"
        onClick={(event) => handleClick(event, '/')}
      >BookMemo</h1>
      <ul className="mt-10 grid gap-y-9 text-center">
        <SideMenuLink
          onClick={(event) => handleClick(event, '/create')}
          className="cursor-pointer"
        >
          Create
        </SideMenuLink>
        <SideMenuLink
          onClick={(event) => handleClick(event, '/memory')}
          className="cursor-pointer"
        >
          Memory
        </SideMenuLink>
      </ul>
    </aside>
  );
}

export default SideBar;
