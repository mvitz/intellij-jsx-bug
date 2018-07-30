"use strict";

module.exports = {
	js: [{
		source: "./index.jsx",
		target: "./target/classes/target.js",
		exports: "render",
		esnext: {
			exclude: ["classnames"]
		},
		jsx: { pragma: "createElement" }
	}]
};
