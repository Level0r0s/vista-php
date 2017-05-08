' Create and show a window with one text panel
' When you click the "Run" button the window should appear

' create the elements
Dim win as Window
Dim basic as BasicEditor

' add the basic editor panel
win.add(basic)

' show the window
win.caption = "Basic Editor"
win.width = 375
win.height = 275
win.moveTo(15, 15)
win.show()

