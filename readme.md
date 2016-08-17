# Pig Latin Translator

This is an Epicodus Exercise (Intro to Programming) called Pig Latin translator. It translates any given piece of text from English to Pig Latin.

## Specs

| Behavior      | Input Example || Output Example  |
| ------------- | ------------- || -------------   |
| The program ignores non-alphabetical characters.  | 3  || 3  |
| The program adds "ay" to any lower-case single vowel.  | i  || iay    |
| The program adds "ay" to multi-letter words beginning with a vowel, case-insensitive. | Octopus  || Octopusay   |
| The program moves the first consonant to the end of any word beginning with a consonant, case -insensitive, and adds "ay" afterwards.  | Caca  || acaCay    |
| The program moves the first consecutive consonants to the end of any word  beginning with multiple consonants, case -insensitive, and adds "ay" afterwards.  | Phobia  || obiaPhay    |
| The program moves the first "q" AND the "u" to the end of any word beginning with "qu" and adds "ay" afterwards  | Quest  || estQuay     |
| For words beginning with multiple consonants, where the final consonant of that first set is a "q" followed by a "u", the program moves the first consecutive consonants AND the "u" to the end and adds "ay" afterwards.  | Squirrel  || irrelSquiay  |
| The program moves the first "y" to the end of any word beginning with "y", followed by a vowel, and adds "ay" afterwards.  | Yummy  || ummyYay  |
| The program moves the first "y" and following consonants to the end of any word beginning with "y", and followed by one or more other consonants before a vowel, t and adds "ay" afterwards.  | Ykesha  || eshaYkay  |

## Setup

* Clone Repository:

```
$ git clone https://github.com/mrtsanchez/pig-latin.git
```

* Open file in HTML browser.
* Enjoy!

## Technologies used:

Javascript, HTML, CSS, bootstrap framework.

## Credits

Marta Sánchez

This software is licensed under MIT license.

Copyright (c) 2016 Marta Sanchez
