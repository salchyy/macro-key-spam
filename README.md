# macro-key-spam
Description

This mod for Tera enables users to automate key presses in the game through a global key listener. It allows the user to toggle a macro on and off by pressing a designated start key, which then repeatedly presses another specified key at a set interval.

Features

    Toggle Macro with Key: The macro is toggled on or off by pressing a specified start key.
    Key Spamming: Automatically spams a specified key at a user-defined interval when the macro is active.
    Customizable Settings: Users can customize the start key, the key to spam, and the delay between spams.
    Command Interface: Includes commands to open the settings UI and to check key names.
    GUI Settings (Optional): A graphical user interface for settings is available if running in TeraProxy's GUI mode.

Requirements

    Node.js Packages: tera-mod-ui, node-global-key-listener, and robotjs (included).

Usage

    To customize settings, use the command mui in-game to open the settings UI (if in GUI mode).
    To check the name of a key, use the command check in-game. This will enable a mode where pressing a key will display its name.

Settings

    keytostart: The key that, when pressed, toggles the macro on or off.
    keytospam: The key that will be spammed when the macro is active.
    macrodelay: The delay (in milliseconds) between each key spam action.

Commands

    mui: Opens the settings UI (only available in GUI mode).
    check: Toggles the mode to check the name of the keys pressed.
