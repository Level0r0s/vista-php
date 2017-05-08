' Create and show a window with one text panel
' When you click the "Run" button the window should appear

' create the elements
Dim win as Window
Dim text as TextArea

' add the text panels
win.add(text)

' set the text content
text.setValue("This is a text area")

' show the window
win.caption = "One Text Panel"
win.width = 375
win.height = 275
win.moveTo(15, 15)
win.show()

