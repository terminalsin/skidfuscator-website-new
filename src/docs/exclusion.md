# Writing Exclusions (Skidfuscator >= 2.0.0)

A regex (regular expression) is a type of search pattern used to identify character strings. It is typically used to search for, replace and validate text. Regexes are written in a formal language and are used in programming, data science and other applications.

Skidfuscator uses regexes to handle the inclusion and exclusion aspect of it's configuration.

Understanding exclusions might be tricky at first, but trust me, it is quite easy once you get the hang of it. 

First and foremost, it's important to understand basic regex. 

## Basics of Regex (Regular expressions)

- Here's a basic string to match everything:
```java
(.*?)
```

So the following would happen:
```java
abozeofez // Matches!
zeigzoegze // Matches!
```

***

- To match any string which contains "roar", you'd have
```java
roar
````

So the following would happen:
```java
roar // Matches!
asdafroar // Matches!
grrr // No match!
```

***

To match any string which begins _with_ "uwu", you'd have:
```java
^uwu
```

So the following would happen:
```java
kitty-uwu // No match!
uwu-kitty // Match!
```

- `kitty-uwu` would not match because uwu is a suffix in this scenario, and therefore doesn't begin with the requirement `uwu`. 
- `uwu-kitty` *would* match in this scenario because the correct prefix specified is present.

***

If you'd like to read more about Regex, find out here: [Regex tutorial](https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285)

## Writing exclusions
This is very simple and easy to do.

- Create a file to write your exclusions in, we recommend using a txt file. 

Skidfuscator reads inclusions and exclusions the same way: if it matches a regex pattern, __**it will not be read or obfuscated**__. 

### Exclusions
By using regex forward matching as seen below, you are able to match any type of class. Remember to escape any "/" with a "\\" to prevent Regex from comitting seppuku and you spending hours figuring out what's wrong.

See below various examples of matching classes & methods for exclusions: 

```java
// This will match any method with the name "main"
method{main} 
// This will match any method which starts with "com.apache" 
// (any class name replaces the "." with "/"
class{^com\/apache} 
// This will match any method which starts with "com.google" 
// (any class name replaces the "." with "/"
class{^com\/google} 
// This will match any method in the class "Controller"
class{Controller$} 
// This will match any method in the class "com.example.MyClass"
class{^com\/example\/MyClass$}
```

#### Multiple exclusions

To be able to exclude for example several methods, or packages, it's quite simple really! All you have to do is create a new line and add the new exemption :)

```java
class{^com\/apache} // Matches apache
class{^com\/google} // Matches google
```


### Inclusions
As opposed to exclusions, you may want to **only include a particular set of classes or a package** in your obfuscated jar. Fret not, this is possible, albeit a little more complicated.

```java
// This will match all classes of the package "com.example"
class{^(?!(com\/example)).*$} 

// This will match all classes of the package "com.example" and 
// all of the classes of the package "com.eclipse". 
// You may add as many packages as you wish with the "|" argument.
class{^(?!(com\/example)|(com\/eclipse)).*$} 
```

## Debugging Exclusions

I strongly recommend using a regex debugger, such as [Regex101](https://regex101.com/), to be able to figure out what matches and what does not. 

All class names, by default, follow the format "package1/package2/class1". Whilst you may see in the JVM it is formatted differently, in the case of Skidfuscator, the above format was decided to be the most effective and reflective of Jar/Zip file hierarchy.

## Exemplar Exclusions File

A lot of our clients develop Minecraft modifications or plugins, see below a template / exemplar configuration file with the most commonly required exclusions:

```java
// Package exclusions below
class{^net\/minecraftforge} // Matches Minecraft Forge
class{^net\/minecraft\/client} // Matches Minecraft Client
class{^net\/minecraft\/server} // Matches Minecraft Server
class{^org\/bukkit} // Matches Bukkit
class{^com\/mojang} // Matches Mojang
class{^me\/johnymuffin} // Matches JohnyMuffin
class{^com\/sk89q} // Matches Sk89q
class{^org\/spigotmc} // Matches SpigotMC
class{^org\/apache\/commons} // Matches Apache Commons
class{^org\/jline} // Matches JLine

// Method exclusions below 
method{^net\.minecraft\.client} // Excludes all methods from net.minecraft.client package 
method{^net\.minecraft\.util} // Excludes all methods from net.minecraft.util package 
method{^net\.minecraft\.client\.Minecraft} // Excludes all methods from the Minecraft class
```
