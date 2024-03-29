## Driver Hardening

The driver is the hardening part of Skidfuscator. This feature is reserved to Premium. In a nutshell,
per obfuscation, a new driver is generated and compiled for the following architectures:

| Operating System | Supported Architectures |
|------------------|-------------------------|
| Windows          | x64_86                  |
| MacOS            | x64_86, AARCH64 (ARM)   |
| Linux            | x64_86 (AMD64)          |


## Config
To enable this feature (:warning: this significantly increases obfuscation strength), you must toggle the boolean:

```js
driver: {
    enabled: false // Disabled by default
}
```
