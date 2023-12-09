
const SettingsUI = require('tera-mod-ui').Settings
const  {GlobalKeyboardListener} = require('node-global-key-listener');

module.exports = function macro(mod) {
	
	let ui = null
	if (global.TeraProxy.GUIMode) {
		ui = new SettingsUI(mod, require('./settings_structure'), mod.settings, { height: 390 })
		ui.on('update', settings => {
			mod.settings = settings
		})
		
		this.destructor = () => {
			if (ui) {
				ui.close();
				ui = null;
			}
		}
	}	
	const options = mod.settings;
	const v = new GlobalKeyboardListener();
	var robot = require("robotjs");
	
	let intervalId = null,
		check = false;
	

	v.addListener((e) => {
		if (options.keytohold.toLowerCase() && (e.name.toLowerCase() === options.keytohold.toLowerCase()) && options.enabled) {
			if(check) {
				check = false;
				mod.command.message("name of key pressed: " + e.name)
			}
			if (e.state === "DOWN" && !intervalId) {
				intervalId = setInterval(() => {
					robot.keyTap(options.keytospam);
				}, options.macrodelay);				
			} else if (e.state === "UP" && intervalId) {
				clearInterval(intervalId);
				intervalId = null;
			}
		}
	});
	this.destructor = () => {
			v.removeListener();
			ui.close();
			ui = null;
	};
	mod.command.add("mui", () => { if (ui) ui.show() });
	mod.command.add('check', () => {
		check = !check
		if(check) mod.command.message("Press once the key you want to check its name");
	});	
}
