# macro-key-spam
Description

This mod for Tera allows users to automate key presses in the game. It's designed to listen for global key events and execute a predefined key spam action when a specific key is held down.

Features

    Key Hold Detection: The mod listens for a specific key being held down globally (even when the game is not in focus).
    Key Spamming: Automatically spams a specified key at a defined interval while the designated key is held.
    Customizable Settings: Users can customize the key to hold, the key to spam, and the delay between spams.
    Command Interface: Includes commands to toggle settings and check key names.
    GUI Settings (Optional): A graphical user interface for settings is available if running in TeraProxy's GUI mode.

Requirements

    TeraProxy: This mod requires TeraProxy to be installed.
    Node.js Packages: tera-mod-ui, node-global-key-listener, and robotjs (included).

Usage

    To customize settings, use the command mui in-game to open the settings UI (if in GUI mode).
    To check the name of a key, use the command check in-game. This will enable a mode where pressing a key will display its name.

Settings

    keytohold: The key that, when held down, activates the macro.
    keytospam: The key that will be spammed when the macro is active.
    macrodelay: The delay (in milliseconds) between each key spam action.

Commands

    mui: Opens the settings UI (only available in GUI mode).
    check: Toggles the mode to check the name of the keys pressed.
