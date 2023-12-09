
const SettingsUI = require('tera-mod-ui').Settings
const  {GlobalKeyboardListener} = require('node-global-key-listener');

module.exports = function macro(mod) {
	
	let ui = null
	if (global.TeraProxy.GUIMode) {
		ui = new SettingsUI(mod, require('./settings_structure'), mod.settings, { height: 390 })
		ui.on('update', settings => {
			mod.settings = settings
		})
	}	
	const options = mod.settings;
	const v = new GlobalKeyboardListener();
	var robot = require("robotjs");
	
	let intervalId = null,
		check = false;
	const state = "UP";
	
	v.addListener((e) => {
		if(check) {
			check = false;
			mod.command.message("name of key pressed: " + e.name)
			return
		}		
		if (options.keytostart && (e.name.toLowerCase() === options.keytostart.toLowerCase()) && options.enabled && (e.state === state)) {
				if(!intervalId) {
					clearInterval(intervalId);
					intervalId = null;					
					mod.command.message("Macro on");
					intervalId = setInterval(() => {
						robot.keyTap(options.keytospam);
					}, options.macrodelay);
				} else {
					mod.command.message("Macro off");
					clearInterval(intervalId);
					intervalId = null;					
				}
		}
	});
	this.destructor = () => {
			clearInterval(intervalId);
			intervalId = null;		
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
