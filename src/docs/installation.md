# Installation

Skidfuscator is distributed via our website, GitHub, or our Discord server announcements channel. 

## Our platforms 
- [Website](https://skidfuscator.dev)
- [Discord](https://discord.gg/7pVgsRweeh)
- [GitHub](https://github.com/terminalsin/skidfuscator-java-obfuscator)

Please note that the GitHub is only for our free, community edition version of Skidfuscator.

## Community Edition

You can find the download link for community edition [here](https://github.com/skidfuscatordev/skidfuscator-java-obfuscator/releases/), for premium edition please visit our website or join our Discord. 

Note that Skidfuscator requires Java 8 (ie. JDK 1.8 or better) to run properly. 

The cleanest way to run Skidfuscator is use the `-jar` parameter in your command line interface tool, you will be presented with various options on how to start with the obfuscation of your file.

## Allocating more memory
It is important to note that typically you should give the JVM more than the default amount of memory to work with. If you use the -Xmx512m parameter then you will give the JVM a maximum amount of 512MB of memory which should be suitable for most purposes. However, you should be sure not to give the JVM more memory than is physically available. Otherwise performance will deteriorate dramatically as the JVM starts to use virtual memory. 

See below on how to add more memory to Skidfuscator: 

`java -Xmx4G -jar skidfuscator.jar` in your command line interface tool.
