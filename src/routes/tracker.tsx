import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/ui";
import { TrackerDashboard } from "@/components/tracker-dashboard";
export const Route=createFileRoute("/tracker")({head:()=>({meta:[{title:"Service Tracker Dashboard — Veloce"},{name:"description",content:"Track motorcycle mileage, service history, maintenance reminders and performance analytics."},{property:"og:title",content:"Service Tracker Dashboard — Veloce"},{property:"og:description",content:"Track motorcycle mileage, service history, maintenance reminders and performance analytics."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Tracker});
function Tracker(){return <><PageIntro code="DASHBOARD / LIVE" title="Your machine. Fully accounted for." copy="Update mileage, monitor component health, record workshop visits and keep every important document on the grid."/><TrackerDashboard/></>}
