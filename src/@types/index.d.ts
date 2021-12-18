declare module '*.svg' {
	import React = require('react');
	export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
	const src: string;
	export default src;
}

declare module '*.svg' {
	import * as React from 'react';
  
	const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	export default content;
  }

declare module '*.jpg' {
	const content: string;
	export default content;
}

declare module '*.png' {
	const content: string;
	export default content;
}

declare module '*.json' {
	const content: string;
	export default content;
}

declare module '*.ico' {
	const value: string;
	export default value;
}
