importPackage(Packages.org.csstudio.opibuilder.scriptUtil);

var macroInput = DataUtil.createMacrosInput(true);
var prefix = PVUtil.getString(pvArray[0]);
var motorname = PVUtil.getString(pvArray[1]);

macroInput.put("PREFIX", prefix);
macroInput.put("MTR", motorname);
widgetController.setPropertyValue("macros", macroInput);
