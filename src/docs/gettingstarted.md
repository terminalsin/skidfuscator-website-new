# Getting Started

So, you've now succsessfully downloaded Skidfuscator onto your computer and are wondering how to run it? 

Skidfuscator runs via the command line, using the Java CLI. We strongly advise you are familiar with this in order to enjoy a seamless Skidfuscator experience. 

## CLI options for Skidfuscator

Simply run `java -jar <yourSkidfuscatorFile.jar>` and you will be presented with various options: 

![Skidfuscator options](https://i.imgur.com/Yu70Pcq.png)


#### Your input jar
The input jar you want to obfuscate with Skidfuscator.
```cli
<input>
```

#### Your exclusions 
The path to the file which contains your exclusions.
```cli
--exempt=<exempt>
```

#### Skip computation
**USE THIS AT YOUR OWN RISK**
Completely skips critical forms of computation such as libraries. Support may be limited if you choose to use this option.
```cli
--fuckit
```

#### Your libraries 
The path to the folder which contains libraries / dependencies required to obfuscate your jar file.
```cli
--libs=<libs>
```

#### Opt out of analytics
This option will not provide us any analytics such as errors you may encounter, or obfuscator usage statistics.
```cli
--notrack
```

#### Your output
The path to where you would like your obfuscated jar to be output, if this option is left empty it will be output in the directory that Skidfuscator was executed in.
```cli
--output=<output>
```

#### Phantom computation
Allows you to enable phantom computation for classes, again, if this option is used, supported may be limited. We strongly advise you provide the necessary libraries required and obfuscate your jar file.
```cli
--phantom
```

#### Specifying runtime 
The path to your java runtime. 
```cli
--runtime=<runtime>
```
