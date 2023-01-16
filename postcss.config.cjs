const OpenProps = require("open-props");
module.exports = {
	plugins: [
		require("autoprefixer"),
		require("postcss-jit-props")({
			...OpenProps,
			"--sc-bg": "Canvas",
			"--sc-text": "CanvasText",
			"--sc-link-text": "LinkText",
			"--sc-link-button-text": "Canvas",
			"--sc-visited-text": "VisitedText",
			"--sc-active-text": "ActiveText",
			"--sc-button-bg": "ButtonFace",
			"--sc-button-text": "ButtonText",
			"--sc-button-border": "ButtonBorder",
			"--sc-field-bg": "Field",
			"--sc-field-text": "FieldText",
			"--sc-highlight-bg": "Highlight",
			"--sc-highlight-text": "HighlightText",
			"--sc-selected-item": "SelectedItem",
			"--sc-selected-item-text": "SelectedItemText",
			"--sc-mark-bg": "Mark",
			"--sc-mark-text": "MarkText",
			"--sc-gray-text": "GrayText",
			"--sc-accent-bg": "AccentColor",
			"--sc-accent-text": "AccentColorText",
			"--dark": "@custom-media --dark (prefers-color-scheme: dark);",
		}),
	],
};
