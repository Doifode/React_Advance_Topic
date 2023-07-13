import React from 'react';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material"
import { CopyAll, Print, Share, EditNotifications } from '@mui/icons-material';

export const SpeedDial_Cp = () => {
  return (
    <SpeedDial
      ariaLabel='Navigation Speed Dial'
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<EditNotifications />} />} >

      <SpeedDialAction icon={<CopyAll />} tooltipTitle="Copy" />
      <SpeedDialAction icon={<Print />} tooltipTitle="Copy" />
      <SpeedDialAction icon={<Share />} tooltipTitle="Copy" />
    </SpeedDial>
  )
}
