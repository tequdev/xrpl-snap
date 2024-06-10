import type { SvgIconProps } from '@peersyst/react-components';
import { SvgIcon } from '@peersyst/react-components';
import clsx from 'clsx';

export default function XrplLogoIcon({ className, ...rest }: Omit<SvgIconProps, 'children'>): JSX.Element {
  return (
    <SvgIcon {...rest} data-testid="XrplLogoIcon" className={clsx(undefined, 'Icon', className)} fill="none">
      <path
        d="M5.52044 4.12281H5.95708V3H5.52044C5.05751 2.9996 4.59902 3.09048 4.17125 3.26745C3.74347 3.44441 3.35479 3.704 3.02744 4.03135C2.7001 4.3587 2.44051 4.74737 2.26352 5.17515C2.08655 5.60293 1.99569 6.06142 1.99609 6.52435V9.08185C1.99703 9.62337 1.79079 10.1447 1.41964 10.5391C1.0485 10.9334 0.540576 11.1708 0 11.2027L0.0311887 11.7641L0 12.3255C0.540576 12.3574 1.0485 12.5948 1.41964 12.9891C1.79079 13.3834 1.99703 13.9048 1.99609 14.4463V17.3937C1.99443 18.3717 2.38114 19.3104 3.07124 20.0035C3.76134 20.6965 4.69837 21.087 5.67639 21.0896V19.9668C4.99823 19.9663 4.34796 19.6968 3.86841 19.2172C3.38889 18.7377 3.11931 18.0874 3.11888 17.4093V14.4463C3.11935 13.9174 2.99026 13.3963 2.74289 12.9287C2.49552 12.4612 2.13738 12.0613 1.6998 11.7641C2.13614 11.4656 2.49332 11.0655 2.74054 10.5982C2.98777 10.1309 3.11762 9.61049 3.11888 9.08185V6.52435C3.12177 5.88832 3.3757 5.27913 3.82547 4.82938C4.27522 4.37962 4.88439 4.12567 5.52044 4.12281Z"
        fill="black"
      />
      <path
        d="M18.4952 4.12281H18.0586V3H18.4952C19.4278 3.00248 20.3212 3.3751 20.9791 4.03594C21.637 4.6968 22.0056 5.59182 22.0039 6.52434V9.08185C22.0031 9.62337 22.2094 10.1447 22.5805 10.5391C22.9516 10.9334 23.4595 11.1708 24.0002 11.2027L23.969 11.7641L24.0002 12.3255C23.4595 12.3573 22.9516 12.5948 22.5805 12.9891C22.2094 13.3834 22.0031 13.9048 22.0039 14.4463V17.3937C22.0056 18.3717 21.6189 19.3104 20.9289 20.0035C20.2387 20.6965 19.3017 21.087 18.3237 21.0896V19.9668C19.0019 19.9663 19.6521 19.6968 20.1318 19.2172C20.6112 18.7377 20.8807 18.0874 20.8811 17.4093V14.4463C20.8807 13.9174 21.0099 13.3963 21.2571 12.9287C21.5047 12.4612 21.8628 12.0613 22.3003 11.7641C21.8638 11.4656 21.5068 11.0655 21.2595 10.5982C21.0122 10.1309 20.8824 9.61049 20.8811 9.08185V6.52434C20.8828 6.20983 20.8224 5.89807 20.7032 5.60699C20.584 5.31588 20.4087 5.05119 20.1871 4.82805C19.9652 4.60494 19.7017 4.42778 19.4114 4.30674C19.1211 4.18572 18.8097 4.12322 18.4952 4.12281Z"
        fill="black"
      />
      <path
        d="M16.093 7.52246H17.7616L14.2841 10.7817C13.6601 11.3463 12.8487 11.6589 12.0073 11.6589C11.1658 11.6589 10.3544 11.3463 9.73049 10.7817L6.25293 7.52246H7.92153L10.557 9.98639C10.9505 10.3476 11.4653 10.548 11.9995 10.548C12.5337 10.548 13.0484 10.3476 13.442 9.98639L16.093 7.52246Z"
        fill="black"
      />
      <path
        d="M7.9069 16.566H6.23828L9.73145 13.2911C10.3519 12.7196 11.1647 12.4023 12.0082 12.4023C12.8518 12.4023 13.6645 12.7196 14.285 13.2911L17.7782 16.566H16.1096L13.4585 14.0709C13.065 13.7096 12.5502 13.5092 12.016 13.5092C11.4819 13.5092 10.9671 13.7096 10.5736 14.0709L7.9069 16.566Z"
        fill="black"
      />
    </SvgIcon>
  );
}
