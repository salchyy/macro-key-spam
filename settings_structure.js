module.exports = [
    {
        "key": "enabled",
        "name": "Enable/Disable the mod",
        "type": "bool"
    },
    {
        "key": "keytostart",
        "name": "key to start the macro",
        "type": "string",
        "minlength": 1,
        "maxlength": 99999,
        "size": 1
    },	
    {
        "key": "macrodelay",
        "name": "macro delay (in ms)",
        "type": "number",
        "min": 1,
        "max": 99999,
        "step": 1
    },
    {
        "key": "keytospam",
        "name": "key to spam",
        "type": "string",
        "minlength": 1,
        "maxlength": 99999,
        "size": 1
    }
]
