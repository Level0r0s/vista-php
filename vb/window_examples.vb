Public Module WindowExamples

    '
    ' Open a window with a graphic canvas
    ' 
    ' run WindowExamples.CanvasWindow()
    '
    Sub ButtonsWindow()

        ' create the elements
        Dim Win as Window
        Dim Bb as ButtonBar
        Dim Btn as MenubarButton

        Win.setCaption("Buttons")
        Btn.setLabel("Click Me")
        Bb.add(Btn)
        Win.addSouth(Bb)
        Win.show()

    End Sub

    '
    ' This is called when "Btn" is clicked
    '
    Sub Btn_Click()

        print "Btn was clicked"

    End Sub


    '
    ' Open a window with a graphic canvas
    ' 
    ' run WindowExamples.CanvasWindow()
    '
    Sub CanvasWindow()

        ' create the elements
        Dim win as Window
        Dim cnv as Canvas

        ' add the canvas panel
        win.add(cnv)

        ' show the window
        win.caption = "Canvas Window"
        win.width = 375
        win.height = 275
        win.moveTo(15, 15)
        win.show()

    End Sub

    '
    ' Open a window with a rich editor
    ' 
    ' run WindowExamples.RichEditorWindow()
    '
    Sub RichEditorWindow()

        ' create the elements
        Dim win as Window
        Dim rich as RichEditor

        ' add the rich text panel
        win.add(rich)

        ' show the window
        win.caption = "Rich Editor Window"
        win.width = 375
        win.height = 275
        win.moveTo(15, 15)
        win.show()

    End Sub

    '
    ' Open a window with split panels
    '
    ' run WindowExamples.SplitPanels()
    '
    Sub SplitWindow()

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
        win.caption = "Split Window"
        win.width = 375
        win.height = 275
        win.moveTo(15, 15)
        win.show()

    End Sub

    '
    ' Open a window with multiple tabs
    '
    ' run WindowExamples.TabWindow()
    '
    Sub TabsWindow()

        ' create the elements
        Dim win as Window
        Dim tabs as TabPanel
        Dim tab1 as TabPage
        Dim tab2 as TabPage
        Dim tab3 as TabPage

        Dim cnv as Canvas
        Dim text1 as TextArea
        Dim text2 as TextArea

        'add the tab pages to the panel
        tab1.setLabel("Text One")
        tab2.setLabel("Text Two")
        tab3.setLabel("Canvas")
        tabs.add(tab1)
        tabs.add(tab2)
        tabs.add(tab3)

        ' add the tabs to the window
        win.add(tabs)

        ' set the tab page values
        tab1.add(text1)
        tab2.add(text2)
        tab3.add(cnv)

        ' show the window
        win.caption = "Tabs Window"
        win.width = 375
        win.height = 275
        win.moveTo(15, 15)
        win.show()

    End Sub

    '
    ' Open a window with a Vista Basic editor
    '
    ' run WindowExamples.VBEditorWindow()
    '
    Sub VBEditorWindow()

        Dim win as Window
        Dim basic as BasicEditor

        ' add the basic editor panel
        win.add(basic)

        ' show the window
        win.caption = "VB Editor Window"
        win.width = 375
        win.height = 275
        win.moveTo(15, 15)
        win.show()

    End Sub

End Module
