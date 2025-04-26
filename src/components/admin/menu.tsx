'use client';

import Button from '@mui/material/Button';
import { Menu as MuiMenu } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { signOut } from 'next-auth/react';
import { useState } from 'react';

interface MenuProps{
    userName: string
}

export default function Menu({userName}: MenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color: 'var(--quinary)'}}
      >
        {userName.split(' ')[0]}
      </Button>
      <MuiMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={() => signOut()}>Logout</MenuItem>
      </MuiMenu>
    </div>
  );
}

