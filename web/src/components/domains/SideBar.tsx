import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideMenuLink from '../commons/atoms/SideMenuLink';

const SideBar: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = React.useCallback((_: React.MouseEvent<HTMLLIElement, MouseEvent> | React.SyntheticEvent<HTMLElement, Event>, data: string | undefined) => {
    if (data) navigate(data);
  },[navigate])

  return (
    <aside className="h-full w-full bg-blue-200 lg:w-1/5">
      <h1 className="mt-5 text-center text-3xl">BookMemo</h1>
      <ul className="mt-10 grid gap-y-9 text-center">
        <SideMenuLink
          onClick={(event) => handleClick(event, '/create')}
          className="cursor-pointer"
        >
          Create
        </SideMenuLink>
        <li>Read</li>
        <li>Update</li>
        <li>Delete</li>
      </ul>
    </aside>
  );
}

export default SideBar;