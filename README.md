# nexdialog
creating a website that creates text files for my scratch project to parse correctly

this is not at all done because i am stupid and i have no idea how to actually do this but im gonna try my best to because i really want to see this done

how to manually format your dialog entries in the dialog list:

**first letter x**§ **first letter y**§ **wrap x**§ **push y** \
**name**§**text-content**§**sound-id**§**optional-event** \
**another-name**§**text-content**§**sound-id**§**optional-event**

you don't really need to worry about the coordinates in the first line, if you're using my dialog box then just keep them at **-90**, **-70**, **180**, **-150** \
but if you aren't then I will explain the coordinates:

**first letter x,y** - the position of where text-content will begin from the top left corner \
**wrap x** - if the end of word exceeds this value, the word will be wrapped back to the other side and  moved down \
**push y** - if the text-content exceeds this value it'll be moved to a new dialog entry (but not inserted into the list) 

to color the text (ignore the boxes [] ), use: \
^**hexadecimal 16**(and)**text-content** \
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f \
try this: I like **^c**gems yippie (gems will be a purple)

to line break, use **/n** \
to skip the current entry, use **-n** \
to type the continue arrow, use **¶**
