' Create and show a window with one text panel
' When you click the "Run" button the window should appear

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
win.caption = "Tab Panel"
win.width = 375
win.height = 275
win.moveTo(15, 15)
win.show()

