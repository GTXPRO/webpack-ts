import '@testing-library/jest-dom/extend-expect';

// declare module '*.svg' {
//   const content: any;
//   export default content;
// }

declare module '*.ico' {
  const value: any;
  export default value;
}

declare module '*.svg' {
  import * as React from 'react';

  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.svg?inline' {
  const content: any;
  export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';
