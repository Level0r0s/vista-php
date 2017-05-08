' Create and show a window with two text panels
' When you click the "Run" button the window should appear

' create the elements
Dim win as Window
Dim hsplit as HSplitPanel
Dim vsplit as VSplitPanel
Dim topLeft as TextArea
Dim topRight as TextArea
Dim bottom as TextArea

' add the text panels
hsplit.add(topLeft, 1)
hsplit.add(topRight, 1)
vsplit.add(hsplit, 1)
vsplit.add(bottom, 1)
win.add(vsplit)

' set the text content
topLeft.setValue("Top left")
topRight.setValue("Top right")
bottom.setValue("Bottom")

' show the window
win.caption = "Three Text Panels"
win.width = 375
win.height = 275
win.moveTo(15, 15)
win.show()

