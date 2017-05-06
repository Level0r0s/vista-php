' Create and show a window with two text panels
'
sub openWindow()

    ' create the elements
    Dim win as Window
    Dim hsplit as HSplitPanel
    Dim leftText as TextArea
    Dim rightText as TextArea

    ' add the text panels
    hsplit.add(leftText, 1)
    hsplit.add(rightText, 1)
    win.add(hsplit)

    ' show the window
    win.caption = "Text Panels"
    win.width = 375
    win.height = 275
    win.moveTo(15, 15)
    win.show()

end sub
