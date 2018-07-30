// noinspection ES6UnusedImports
import { createElement } from "complate-stream";

export const _Component = ({ title }, ...children) => {
	return <div>
		<h1>{title}</h1>
		{children}
	</div>;
};
