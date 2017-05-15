Public Module ButtonExample

Public Sub OpenWindow()

    Dim Win as Window
    Dim Bb as ButtonBar
    Dim BtnHello as MenubarButton
    Dim BtnButtons as MenubarButton
    Dim BtnWorld as MenubarButton

    Win.setCaption("Buttons")
    BtnHello.setLabel("Hello")
    BtnButtons.setLabel("Buttons")
    BtnWorld.setLabel("World")
    Bb.add(BtnHello)
    Bb.add(BtnButtons)
    Bb.add(BtnWorld)
    Win.addSouth(Bb)
    Win.show()

End Sub

Public Sub BtnHello_Click()

    print "Hello was clicked"

End Sub

Public Sub BtnButtons_Click()

    print "Buttons was clicked"

End Sub

Public Sub BtnWorld_Click()

    print "World was clicked"

End Sub

End Module

ButtonExample.OpenWindow()
