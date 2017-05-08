' Create and show a window with one text panel
' When you click the "Run" button the window should appear

' create the elements
Dim win as Window
Dim rich as RichEditor

' add the rich text panel
win.add(rich)

' show the window
win.caption = "Rich Editor"
win.width = 375
win.height = 275
win.moveTo(15, 15)
win.show()

