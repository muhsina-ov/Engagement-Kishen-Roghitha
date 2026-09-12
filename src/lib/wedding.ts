export const couple = {
  bride: "Jai Kishen",
  groom: "Roghitha",
  tagline: "Two hearts, one eternal promise",
  dateLabel: "Thursday, 17 September 2026",
  timeLabel: "10:30 AM – 11:30 AM",
  weddingISO: "2026-09-17T10:30:00+05:30",
};

export type WeddingEvent = {
  name: string;
  glyph: string;
  date: string;
  time: string;
  venue: string;
  note: string;
};

export const events: WeddingEvent[] = [
  {
    name: "Engagement Ceremony",
    glyph: "💍",
    date: "17 Sep 2026",
    time: "10:30 AM – 11:30 AM",
    venue: "Door no: 25, B Block, 2nd floor, Annal Apartment, Mogappair West",
    note: "Auspicious exchange of rings and celebration of love.",
  },
  {
    name: "Festive Lunch & Celebration",
    glyph: "✨",
    date: "17 Sep 2026",
    time: "12:00 PM Onwards",
    venue: "Annal Apartment, Annamalai Avenue, Mogappair West",
    note: "Join us for joyous blessings, photography and festive feast.",
  },
];

export const venue = {
  name: "K. Kiran Singh Residence",
  address:
    "Door no: 25, B Block, 2nd floor, Annal apartment, Annamalai avenue, Mogappair west, Chennai - 600037",
  mapsUrl: "https://maps.app.goo.gl/txfGu576QnE5pC7p6?g_st=ac",
};

function icsStamp(d: Date) {
  return `${d.toISOString().replace(/[-:]/g, "").slice(0, 15)}Z`;
}

export function buildICS() {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Jai Kishen & Roghitha//Engagement//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
  ];

  // 17 Sep 2026 10:30 AM IST = 05:00 UTC
  const start = new Date("2026-09-17T10:30:00+05:30");
  const end = new Date("2026-09-17T13:30:00+05:30");

  lines.push(
    "BEGIN:VEVENT",
    `UID:engagement-kishen-roghitha-20260917@invitestory.in`,
    `DTSTAMP:${icsStamp(new Date())}`,
    `DTSTART:${icsStamp(start)}`,
    `DTEND:${icsStamp(end)}`,
    `SUMMARY:Engagement Ceremony | ${couple.bride} & ${couple.groom}`,
    `LOCATION:${venue.address}`,
    `DESCRIPTION:Join us to celebrate the engagement ceremony of ${couple.bride} & ${couple.groom}. Google Maps: ${venue.mapsUrl}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
  );

  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

export function downloadICS() {
  const blob = new Blob([buildICS()], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "kishen-roghitha-engagement.ics";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
