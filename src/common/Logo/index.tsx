import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

interface LogoProps {
  className?: string
  size?: number
};

const Logo = (props: LogoProps) => {
  const classes = useStyles(props)

  return (
    <svg
      className={clsx(classes.Logo, props.className)}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 563.82 637.44"
    >
      <title>Modular Material Admin + React</title>
      <g>
        <path
          className={clsx(classes.path, classes.outline)}
          d="M24.13,334.53c0-17,0-34.08,0-51.12-.06-25.71-.2-51.42-.26-77.13a120.65,120.65,0,0,1,1-18.17c1.91-12.83,9.11-22.06,19.67-28.91C57,151.09,70.21,144.1,83.23,136.85c27.09-15.08,53.71-31,80.57-46.43Q207.86,65,251.94,39.65c11.73-6.73,23.57-13.25,35.38-19.83,8.72-4.86,18-5.06,27.57-3.37,8.95,1.59,16.36,6.57,24,11Q390.07,56.92,441.2,86.49q36.66,21.17,73.34,42.31c16.37,9.4,32.86,18.61,49.21,28.05,10.51,6.07,18.39,14.5,22.07,26.33a42.26,42.26,0,0,1,1.79,12.65q0,43.5,0,87,0,93.58.06,187.16c0,18-7.87,31.43-23.07,40.38-26,15.33-52.32,30.24-78.5,45.33q-44.19,25.47-88.39,50.94C374.2,620.16,350.79,633.89,327,647c-14.79,8.12-29.86,8.05-44.83-.77-27.66-16.31-55.53-32.26-83.32-48.36q-40-23.18-80-46.32c-23.78-13.68-47.67-27.15-71.45-40.82-12.17-7-20.22-17.16-22.87-31.17a33.92,33.92,0,0,1-.29-6.26q0-69.36,0-138.72Zm43.28,2.25c-.19,43.94-.44,87.89.44,131.83.05,2.6,1.08,3.88,3.15,5.09,17.1,9.94,34.1,20.06,51.23,30,31,17.89,62.06,35.63,93.06,53.49C233,567.35,250.78,577.55,268.39,588c11.63,6.89,23.26,13.72,35.43,19.63a3.92,3.92,0,0,0,3.92.07c2.55-1.33,5.18-2.49,7.73-3.83,20.52-10.76,40.13-23.09,60.19-34.64q35.51-20.44,71-40.91c31.62-18.19,63.24-36.39,94.63-55,1.5-.89,2.36-1.78,2.38-3.68.19-14,.67-28.08.74-42.12.39-75.43.6-150.87-.57-226.3,0-.89-.22-1.79-.18-2.68.09-1.83-.83-2.82-2.35-3.76C512.59,177,483,160.56,453.62,143.9c-30-17-59.63-34.66-89.46-52-18.49-10.72-37.27-20.92-56-31.12-1.27-.69-2.52-1.22-3.95-.49-7.22,3.73-14.63,7.14-21.64,11.25-39.54,23.14-79.13,46.22-119,68.84q-46.69,26.51-92.7,54.18c-1.74,1-2.89,2.07-2.9,4.37-.08,10.86-.48,21.71-.5,32.57Q67.34,284.16,67.42,336.77Z"
          transform="translate(-23.86 -15.48)"
        />
        <path
          className={clsx(classes.path, classes.letter)}
          d="M457.14,336c0,26.61,0,53.22.05,79.83a5.16,5.16,0,0,1-3,5.15q-26.17,14.56-52.24,29.3c-2.7,1.52-3,1.35-3.06-2-.11-17.74-.22-35.48-.25-53.22,0-27.21.13-54.42-.08-81.63-.07-9.26-.36-18.52-.48-27.79,0-3.52-.4-3.72-3.48-2-18,9.83-35.24,20.77-52.65,31.5-11.15,6.87-22.36,13.64-33.84,20a4.26,4.26,0,0,1-4.64,0c-16.26-8.4-31.48-18.56-47.06-28.09-12.87-7.87-25.77-15.68-38.86-23.17-3.38-1.94-3.68-1.71-3.79,2.14-1.42,47.73-.19,95.47-.65,143.2-.06,6.48-.17,13-.26,19.43,0,3.08-.16,3.15-2.94,1.72-15.23-7.78-29.71-16.89-44.66-25.16-2.78-1.54-5.53-3.12-8.33-4.61a3.9,3.9,0,0,1-2.27-3.8c-.78-49-.56-98.06-.27-147.1,0-4.88.28-9.76.28-14.64a4.39,4.39,0,0,1,2.32-4.1,659.56,659.56,0,0,1,57.19-33.12c4.65-2.4,8.77-1.63,13,.52,9.06,4.58,17.41,10.34,26,15.62,16.59,10.16,33.08,20.48,50.26,29.64a4.68,4.68,0,0,0,5,0c18.32-9.6,35.55-21,53.18-31.77,9.33-5.7,18.91-10.91,28.65-15.86a4.2,4.2,0,0,1,4.25-.14c20.22,11.23,40.73,22,59.9,35a5.54,5.54,0,0,1,2.79,5.1C457.45,282.58,457.84,309.28,457.14,336Z"
          transform="translate(-23.86 -15.48)"
        />
      </g>
    </svg>
  )
}

const useStyles = makeStyles(theme => ({
  Logo: (props: LogoProps) => ({
    display: 'inline-block',
    verticalAlign: 'text-bottom',
    width: props.size,
    height: props.size,
  }),
  path: {
    transition: 'all .3s ease',
  },
  outline: {
    fill: 'currentColor',
  },
  letter: {
    fill: 'currentColor',
  },
}));

export default Logo;