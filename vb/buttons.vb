Public Module ButtonExample

Public Sub OpenWindow()

    Dim win as Window
    Dim bb as ButtonBar
    Dim btnHello as MenubarButton
    Dim btnButtons as MenubarButton
    Dim btnWorld as MenubarButton

    win.setCaption("Buttons")
    btnHello.setLabel("Hello")
    btnButtons.setLabel("Buttons")
    btnWorld.setLabel("World")
    bb.add(btnHello)
    bb.add(btnButtons)
    bb.add(btnWorld)
    win.addSouth(bb)
    win.show()

End Sub

Public Sub btnHello_Click()

    print "Hello was clicked"

End Sub

Public Sub btnButtons_Click()

    print "Buttons was clicked"

End Sub

Public Sub btnWorld_Click()

    print "World was clicked"

End Sub

End Module

ButtonExample.OpenWindow()
