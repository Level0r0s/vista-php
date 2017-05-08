' Create and show a window with two text panels
' When you click the "Run" button the window should appear

' create the elements
Dim win as Window
Dim hsplit as HSplitPanel
Dim left as TextArea
Dim right as TextArea

' add the text panels
hsplit.add(left, 1)
hsplit.add(right, 1)
win.add(hsplit)

' set the text content
left.setValue("Left text area")
right.setValue("Right text area")

' show the window
win.caption = "Two Text Panels"
win.width = 375
win.height = 275
win.moveTo(15, 15)
win.show()

