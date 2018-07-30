// noinspection ES6UnusedImports
import { createElement } from "complate-stream";

import { _Component } from "./component";

// noinspection JSUnusedGlobalSymbols
export const Foo = ({ title }) => {
	return <div>
		<_Component title={title}>
			<p>Some text</p>
		</_Component>
		<_Footer />
	</div>;
};

const _Footer = () => {
	return <div>
		<p>Footer</p>
	</div>;
};
