---
home: true
icon: home
title: Home
heroImage: /logo.png
heroText: Skidfuscator
tagline: Powerful Java Obfuscation at the click of your hand
actions:
  - text: Pricing 💡
    link: /pricing/
    type: primary

  - text: Docs
    link: /docs/

features:
  - title: Secure
    icon: bolt
    details: Protect your Java application with state-of-the-art obfuscation and encryption

  - title: Research-Backed
    icon: book
    details: Backed by academic, proven and peer-reviewed theoretical concepts.

  - title: Rigorously Tested
    icon: laptop
    details: Backed by a 50+ complete unit testing suite. Odds are, Skidfuscator will work out-of-the-box for you.

  - title: Fast Support
    icon: message
    details: Weekly bug-fixes with nightly releases. Skidfuscator has unbeatable support.

  - title: String Encryption
    icon: lock
    details: Hide your Strings in your java application. Hide your endpoints and keep yourself secure.

  - title: Flow Obfuscation
    icon: bug
    details: Prevent reverse-engineers from understanding your software. 

  - title: Renamer Obfuscation
    icon: arrow-down-a-z
    details: Hide the name of your classes and prevent hackers from comprehending your jar

  - title: Native Obfuscation (Soon)
    icon: code-merge
    details: Translate your Java code into native JNI, adding a layer of protection.

copyright: © 2023 Skidfuscator.dev. All rights reserved.
footer: <a href="https://discord.gg/xH7URPReQA" target="_blank">Discord</a>
---
# 
# Why Skidfuscator?

Skidfuscator is a java obfuscator for software developers and companies seeking to protect their Java-based applications from reverse engineering, tampering, and intellectual property theft. Skidfuscator employs a variety of advanced obfuscation techniques, such as control flow obfuscation, string encryption, and class and method renaming, which render the decompiled code significantly harder to understand and analyze. By utilizing these techniques, Skidfuscator increases the effort required to reverse engineer the application, effectively deterring potential attackers and preserving your competitive edge in the market. 

# How to use 

Skidfuscator seeks to be a drag and drop experience, all you need to do is execute the following command to run obfuscation on your project:

```
java -jar Skidfuscator.jar obfuscate <path to jar>
```

![Cool gif](https://i.ibb.co/4MQnj4V/FE185-E3-B-0-D0-D-4-ACC-81-AA-A4862-DF01-FA3.gif)

# Features

We currently are working on a variety of ways to approach this system using various lightweight obfuscation methods. 

#### **Skidfuscator is backed by research**

Inspired by the greats, such as Christian Collberg's [Taxonomy of Obfuscation](https://researchspace.auckland.ac.nz/bitstream/handle/2292/3491/TR148.pdf), and many more academic papers, Skidfuscator is the implementation in which theory meets real-world use. 

#### **Skidfuscator is not just-another-obfuscator**
By leveraging the fact that your program is a culmination of many classes and methods, Skidfuscator is the second obfuscator to introduce interprocedural obfuscation. This makes reverse-engineering exponentially more complex and thwarts most if not all currently available deobfuscation tools. 

#### **Skidfuscator is compatible**
With the optic of stability, Skidfuscator is compatible from Java 1.8 to Java 18. In addition, Skidfuscator offers pre-existing configurations for popular tools, such as Spigot, Forge, and Sponge for Minecraft, JDA for Discord, and various other toolset commonly prevalent in the Java community.

#### **Learn more about Skidfuscator**

Do not hesitate to ask all sales questions to `mastermind@artemis.ac`or to [join our discord](https://discord.gg/mTaZDCngEW)


#### **Transformers**
As of right now, the following transformers are available in Skidfuscator:

| Obfuscation Strategy          | JObfuscator | Zelix KlassMaster | Skidfuscator Community | Skidfuscator Enterprise |
|-------------------------------|-------------|-------------------|------------------------|-------------------------|
| Third Generation Flow         | ❌           | ❌                 | ✅                      | ✅                       |
| Bogus Jump Obfuscation        | ✅           | ✅                 | ✅                      | ✅                       |
| Bogus Exception Obfuscation   | ❌           | ✅                 | ✅                      | ✅                       |
| Mangled Jump Obfuscation      | ❌           | ❌                 | ❌                      | ✅                       |
| Exception Jump Obfuscation    | ❌           | ✅                 | ✅                      | ✅                       |
| String Encryption             | ✅           | ✅                 | ✅                      | ✅                       |
| Polymorphic String Encryption | ❌           | ❌                 | ❌                      | ✅                       |
| Constant Encryption           | ✅           | ✅                 | ✅                      | ✅                       |
| Method Inlining               | ❌           | ❌                 | ❌                      | SoonTM                  |
| Method Outlining              | ❌           | ❌                 | ❌                      | ✅                       |
| Initialisation Outlining      | ❌           | ❌                 | ❌                      | ✅                       |
| Annotation Encryption         | ❌           | ❌                 | ❌                      | ✅                       |
| Reference Encryption          | ❌           | ✅                 | ❌                      | ✅                       |
| Renaming Obfuscation          | ✅           | ✅                 | ❌                      | ✅                       |
| Return Obfuscation            | ❌           | ❌                 | ❌                      | ✅                       |
| Method Parameter Obfuscation  | ❌           | ✅                 | ✅                      | ✅                       |
| Native Driver Obfuscation     | ❌           | ❌                 | ❌                      | ✅                       |
| Crasher Obfuscation           | ❌           | ❌                 | ❌                      | ✅                       |

# Examples

### Unobfuscated
```java
public void exportLog() throws IOException {
    File output = new File("calculations.txt");

    try (BufferedWriter writer = new BufferedWriter(new FileWriter(output))) {
        logs.forEach(log - > {
            try {
                boolean shouldPrintNewLine = !log.contains("\n");

                if (shouldPrintNewLine)
                    writer.write("\n");

                writer.write(log);
            } catch (IOException e) {
                e.printStackTrace();
            }
        });

        writer.flush();
    }
}
```

### Obfuscated
```java
public void KK0oK0o$KK0oKOo$KK0oKK(int var1_1) throws IOException {
    /*
     * This method has failed to decompile.  When submitting a bug report, please provide this stack trace, and (if you hold appropriate legal rights) the relevant class file.
     * 
     * org.benf.cfr.reader.util.ConfusedCFRException: Extractable last case doesn't follow previous, and can't clone.
     *     at org.benf.cfr.reader.bytecode.analysis.opgraph.op3rewriters.SwitchReplacer.examineSwitchContiguity(SwitchReplacer.java:611)
     *     at org.benf.cfr.reader.bytecode.analysis.opgraph.op3rewriters.SwitchReplacer.replaceRawSwitches(SwitchReplacer.java:94)
     *     at org.benf.cfr.reader.bytecode.CodeAnalyser.getAnalysisInner(CodeAnalyser.java:517)
     *     at org.benf.cfr.reader.bytecode.CodeAnalyser.getAnalysisOrWrapFail(CodeAnalyser.java:278)
     *     at org.benf.cfr.reader.bytecode.CodeAnalyser.getAnalysis(CodeAnalyser.java:201)
     *     at org.benf.cfr.reader.entities.attributes.AttributeCode.analyse(AttributeCode.java:94)
     *     at org.benf.cfr.reader.entities.Method.analyse(Method.java:531)
     *     at org.benf.cfr.reader.entities.ClassFile.analyseMid(ClassFile.java:1055)
     *     at org.benf.cfr.reader.entities.ClassFile.analyseTop(ClassFile.java:942)
     *     at org.benf.cfr.reader.Driver.doClass(Driver.java:84)
     *     at org.benf.cfr.reader.CfrDriverImpl.analyse(CfrDriverImpl.java:78)
     */
    throw new IllegalStateException("Decompilation failed");
}
```

# Samples

Don't believe us? Try it yourself! Here below are some samples providing examples of the security we bring.


| Sample name | Unobfuscated | Obfuscated | Info                                                     |
|-------------|--------------|------------|----------------------------------------------------------|
| Evaluator   | [Download](files/evaluator-unobf.jar) | [Download](files/evaluator-obf.jar) | Prints out various debugging informations and unit tests |

# Credits

## Libraries used
- [Maple IR and the Team](https://github.com/LLVM-but-worse/maple-ir)
- [ASM](https://gitlab.ow2.org/asm/asm)
- [AntiDumper by Sim0n](https://github.com/sim0n/anti-java-agent/)
- [Recaf by Col-E](https://github.com/Col-E/Recaf)
- [Some works by xDark](https://github.com/xxDark)

## Inspired from
- [Soot](https://github.com/soot-oss/soot)
- [Zelix KlassMaster](https://zelix.com)
