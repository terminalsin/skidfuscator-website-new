---
home: true
icon: home
title: Home
heroImage: /logo.png
heroText: Skidfuscator
tagline: Powerful Java Obfuscation at the click of your hand
actions:
  - text: Download 💡
    link: /demo/
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

copyright: true
footer: Skidfuscator.dev | Copyright © 2023
---

# 🕵️ What is Skidfuscator?

Skidfuscator is a proof of concept obfuscation tool designed to take advantage of SSA form to optimize and obfuscate Java bytecode code flow. This is done via intra-procedural passes each designed to mingle the code in a shape where neither the time complexity neither the space complexity suffers from a great loss. To achieve the such, we have modeled a couple of well known tricks to add a significant strength to the obfuscation whilst at the same time retaining a stable enough execution time.

# ✨ Features 

Here are all the cool features I've been adding to Skidfuscator. It's a fun project hence don't expect too much from it. It's purpose is
not to be commercial but to inspire some more clever approaches to code flow obfuscation, especially ones which make use of SSA and CFGs

![Cool gif](https://i.ibb.co/4MQnj4V/FE185-E3-B-0-D0-D-4-ACC-81-AA-A4862-DF01-FA3.gif)

## Third Generation Flow

What is third generation flow obfuscation? Well, contrary to Zelix's [second generation flow obfuscation](https://www.zelix.com/klassmaster/featuresFlowObfuscation.html), we use an even more complex system with private and public seeds. Here's 
how it works:

<br>
<br>

![Exampel](https://i.imgur.com/j2tZavr.png)

<sub>_Graph representing the two different approaches towards flow obfuscation between Zelix (17.0) and Skidfuscator (0.0.1)_</sub>
<br>
<br>
<br>

We currently are working on a variety of ways to approach this system using various lightweight obfuscation methods. Here are the current ones
to date:
Here are the features:

| Feature | Type | Description | Status |
| --- | --- | --- | --- |
| `Flow GEN3` | Flow (Community) | Obfuscates methods using the GEN3 Obfuscation methodology | ✅ |
| `Bogus Jump` | Flow (Community) | Invalid jump to some random generated code to prevent skidding | ✅ |
| `Bogus Exception`| Flow (Community) | Invalid jump to some random generated exception | ✅ |
| `Mangled Jump` | Flow (**Enterprise**) | Mutation to the jump condition to make it appear more complex than it actually is | ❌ |
| `Exception Jump` | Flow (**Enterprise**) | Changes done to flow semantics by forcing an exception then handling all the code in the catch clause | ❌ |
| `Exception Return`| Flow (**Enterprise**) | Throw an exception with the value and catch it as opposed to returning it (Very heavy) | ❌ |
| `Strong Opaque Predicate` | Flow (Community) | Use heredity and method invocation to pass a predicate as opposed to declaring it at the beginning of the CFG | ✅ |
| `Method Inlining` | Flow (**Enterprise**) | Inline uncommon methods which aren't too big | ❌ |
| `Method Outlining` | Flow (**Enterprise**) | Outline some non-sensitive blocks | ❌ |
| `Loop Unrolling` | Flow (**Enterprise**) | Rewrite some loops instructions into continuous segments if the loop limit can be pre-determined | ❌ |
| `Flattening` | Flow (Community) | Use a dispatcher method to harden the semantics of some block ranges (do not use entire method) | ⚠️ |
| `String Encryption` | String | Encrypt the strings using the opaque predicate | ✅ |
| `Reference Encryption` | Reference | Encrypt the reference calls using InvokeDynamic using the opaque predicate | ❌ |
| `Reference Proxying` | Reference | Proxy references using a builder pattern OR dispatcher classes (mostly for initialisation) | ❌ |

### ***NEW*** Number Mutation
![Graph](https://i.imgur.com/XjUFdRU.png)

### Switch Mutation
![Graph](https://i.imgur.com/yPjFC8k.png)

### Fake exceptions
![Graph](https://i.imgur.com/bJcTNHm.png)

### Fake jumps
![Graph](https://i.imgur.com/780UIIc.png)

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