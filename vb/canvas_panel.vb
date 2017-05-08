' Create and show a window with one text panel
' When you click the "Run" button the window should appear

' create the elements
Dim win as Window
Dim cnv as Canvas

' add the canvas panel
win.add(cnv)

' show the window
win.caption = "Canvas Panel"
win.width = 375
win.height = 275
win.moveTo(15, 15)
win.show()

