---
title: Changelog
index: false
sidebar: false

breadcrumb: false
pageInfo: false
contributors: false
editLink: false
lastUpdated: false
prev: false
next: false
comment: false
footer: false

tag:
  - disable
icon: tags
category:
  - Guide
---

# Changelog

## 2.19.9 (Coming soon)
- ✨ **NEW** Flow Gen 3.1! New, better, improved. Now supports modularity switch, with 3 random parameters
- ✨ Improvements to String Encryption, Flow Obfuscation, and more!
- ✨ New console look!
- 🐛 Fixed a bug where verification would attempt to check non hierarchal libraries, adding redundancy
- 🐛 Fixed a bug where Driver would return null due to collision
- 🐛 Fixed a bug where InterfConstRef would be invalid
- 🐛 Fixed a bug where clone implicit bridge would be obfuscated, causing conflicts
- 🐛 Improved hierarchy caching in speed, accuracy and efficiency
- 🐛 Fixed a bug where hierarchy would conflict method groups and not properly define them
- 🐛 Fixed a bug where method exemptions for groups would fail to check class parent exemptions
- 🐛 Fixed a where an exempted local method would break and not properly reflect gen 3 flow changes
- 📚 More documentation to wiki

## 2.19.8
- Huge improvements to overall stability tested 25x on unit
- Overall improvements on the debugging aspect 
- Improvements to flow obfuscation

## 2.19.7
- NEW ✨ Reference Obfuscation (disabled by default, suggested by @pathos & @McYeet)
- NEW ✨ New GEN3 renderers
- Stability fixes
- Fixed a bug where congruent methods would cause a group overlap, causing bridge methods to be rewritten
- Fixed a bug where overwriting the skidgroup desc directly via the methods would be dispensed and ignored due to the outliner and the exception return transformer
- Improvements to flow obfuscation
- Fixed an issue where path would be mis-read
- Fixed an issue with the switch proxy renderer

## 2.19.6
- NEW ✨ Exception Return Obfuscation 
- NEW ✨ Toggleable Driver (suggested by @MlxySF)
- NEW ✨ Modifiable and exemptable driver (exclusively per class)
- NEW ✨ Modifiable driver path (Suggested by @pathos)
- NEW ✨ Custom dictionaries (Suggested by @𝕄𝕣. 𝕄𝕔𝕐𝕖𝕖𝕥)
- NEW ✨ File hider technique (Suggested by @pathos)
- Stability fixes
- Overall improvements on the debugging aspect
- Improvements to flow obfuscation
- Fixed an issue where path would be mis-read
- Improved exception handling for GEN3 renderer
- Added basis for new and better GEN3 proxies

## 2.19.5
- Improved flow obfuscation to be more overall resilient
- Added some internal tamper protection
- Fixed driver not properly compiling for linux
- Fixed outliner executing on interfaces
- Added Exception Return transformer (DEV-ONLY)
- More fixes to dispatcher

## 2.19.4
- NEW ✨ Added config
- Fixed issue where debug info wouldn't be parsed by MapleIR, causing internal issues
- Fixed issue with exclusions not being acknowledged by verifier
- Fixes to flow obfuscation
- Fixes to MapleIR and IR generation
- Improved overall initialisation generation stability
- Added strength modes to exception obfuscation
- Improved GEN3 by adding natively hardened predicates (option in config)
- Added back polymorphic string obfuscation (option in config)
- Improved stability, reverted back to single upload for client
- Added partial kotlin obfuscation (WIP)
- Added more documentation on website
- Added crashers (DEV-ONLY)
- Added junk code basis (DEV-ONLY)
- Added basis for starter packs (WIP, do NOT use! Testing only :3)

## 2.19.3
- Fixed FactoryMakerTransformer failing to add file correctly to classpath.
- Fixed String transformation.
- Fixed computed exception not being the parent one.
- Removed debug information.
- Fixed miscalculation of stack depth in MapleIR.
- Fixed exemption misread bug.
- Fixed community mappings generator.
- Fixed exception transformer causing issues with string encryption.
- Fixed annotation string encryption.

