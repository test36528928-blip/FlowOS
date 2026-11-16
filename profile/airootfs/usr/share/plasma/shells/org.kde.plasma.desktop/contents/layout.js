// FlowOS - First Run Desktop Layout

const panel = new Panel

panel.location = "bottom"
panel.height = Math.round(gridUnit * 2)

panel.addWidget("org.kde.plasma.kickoff")
panel.addWidget("org.kde.plasma.digitalclock")
panel.addWidget("org.kde.plasma.systemtray")
