var plasma = getApiVersion(1)

// FlowOS default desktop panel
var panel = new plasma.Panel

panel.location = "bottom"
panel.height = gridUnit * 2
panel.alignment = "center"

panel.addWidget("org.kde.plasma.kickoff")
panel.addWidget("org.kde.plasma.digitalclock")
panel.addWidget("org.kde.plasma.systemtray")
