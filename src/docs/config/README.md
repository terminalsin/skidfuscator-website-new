
# Config

Here you'll learn everything about what the configuration has to offer. Make sure to read these details
with a very keen eye. If you encounter any issues, please contact support. For premium members, you are 
entitled to a free configuration service by our team.

## Basic of the configuration

The basis of the configuration is based on [lightbend config](https://github.com/lightbend/config). This means
by default, we support the three following formats: Java Properties, JSON, and HOCON.

By principle, we **highly recommend using HOCON** as it is simpler, more elegant and all-round easy to use.
See attached the default config:

```javascript
exempt: []

libs: []

stringEncryption {
  type: STANDARD
  enabled: true
  exempt: []
}

numberEncryption {
  enabled: true
  exempt: []
}

intAnnotationEncryption {
  enabled: true
  exempt: []
}

stringAnnotationEncryption {
  enabled: true
  exempt: []
}

exceptionReturn {
  enabled: true
  exempt: []
}

flowCondition {
  enabled: true
  exempt: []
}

flowException {
  enabled: true
  strength: AGGRESSIVE
  exempt: []
}

flowRange {
  enabled: true
  exempt: []
}

flowFactoryMaker {
  enabled: true
  exempt: []
}

flowSwitch {
  enabled: true
  exempt: []
}

outliner {
  enabled: true
  exempt: []
}

ahegao {
  enabled: true
  exempt: []
}

native: {
  enabled: false
  exempt: []
}

driver: {
  enabled: false
}

reference {
  enabled: false
}

fileCrasher: {
  enabled: false
}

classRenamer {
  enabled: false
  type: CUSTOM
  prefix: "skido/"
  chars: [
    "K"
    "oO",
    "o0"
  ]
  depth: 3
}

methodRenamer {
  enabled: false
  type: CUSTOM
  chars: [
    "K"
    "oO",
    "o0"
  ]
  depth: 3
}

fieldRenamer {
  enabled: false
  type: ALPHABETICAL
}
```

## Exemptions

Using exemptions is identical to how these were previously done in the old system. To learn more about
exemptions, navigate to [the page](../exclusion.md)

::: warning 
Java parses string by sanitizing the backwards slash. This means you MUST double all backward slashes
:::

### Excluding a class

As a starting basis, to exclude a specific class, you must use the class regex exemption:
```js
class{^my\/class}
```

To fit this in the config, you need to pass it as a string. 


```js
exempt: [
    "class{^my\\/class}"
]
```

### Excluding a method

As a starting basis, to exclude a specific method, you must use the class method exemption:
```js
method{^myMethod}
```

To fit this in the config, you need to pass it as a string. 

```js
exempt: [
    "method{^myMethod}"
]
```

### Excluding a method in a specific class

Just as we learnt previously, to exclude a method and a class we must do the following:
```js
class{^my\/class}
method{^myMethod}
```

Now, to exclude a method IN that specific class, all that is needed to be done is for the two
to be chained up in a single line, as such:

```js
class{^my\/class} method{^myMethod}
```

Hence in the config, it'd be as follow:

```js
exempt: [
    "class{^my\/class} method{^myMethod}"
]
```

## Libraries

Libraries are an important aspect of computing the classpath and ensuring maximum protection
for your software. In this instance, you must provide a valid Java path argument as a string

Here below is the implementation code:
```java
public File[] getLibs() {
    return this.getStringList("libraries", Collections.emptyList())
                .stream()
                .map(File::new)
                .distinct()
                .toArray(File[]::new);
}
```

Here below is an example of valid java paths:
```
C:\test.jar
test.jar
./test.jar
/Home/test.jar
```

In the config, these would be represented as follows:

```js
libraries [
    "C:\\test.jar",
    "test.jar",
    "./test.jar",
    "/Home/test.jar"
]
```

## Driver

The driver is the hardening part of Skidfuscator. This feature is reserved to Premium. In a nutshell,
per obfuscation, a new driver is generated and compiled for the following architectures:

| Operating System | Supported Architectures |
|------------------|-------------------------|
| Windows          | x64_86                  |
| MacOS            | x64_86, AARCH64 (ARM)   |
| Linux            | x64_86 (AMD64)          |

To disable this feature (:warning: this significantly decreases obfuscation strength), you must toggle the boolean:

```js
driver: false
```


## Transformers

You can individually enable/disable each transformer. 


#### String Encryption

The string encryption transformer transforms every string into a specific method call, with the purpose of hiding
it in runtime. This can be practical for non-sensitive URLs, private keys, etc...

::: warning
You should not trust the client as a basis. Please do not rely on String encryption as the sole protection for your
software. By default, you should assume that a talented enough reverse-engineer could gain access to these with 
enough time and patience.
:::

There are currently two modes for String encryption: `STANDARD` and `POLYMORPHIC`

#### Number Encryption

The number encryption transformer encrypts any integer-based numeral to be hidden. This is perfect for uglifying
the code in general and making it more of a hardship for reverse-engineers to obtain a clean source code. This
furthermore reinforces any boolean-based conditionals.
