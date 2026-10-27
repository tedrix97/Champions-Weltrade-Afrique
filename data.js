/* ==========================================================
   WELTRADE AFRICA AFFILIATE LEADERBOARD — DAILY DATA FILE
   This is the ONLY file you edit each day.
   Both index.html (partners) and admin.html (you) read it.
   Replace it with the file made by "Copy new data.js" in admin.html.
   ========================================================== */

var CONFIG = {
  launch: "2026-11-25T00:00:00+02:00",
  close:  "2026-12-31T23:59:59+02:00",
  updated: null,          // set automatically by admin.html, e.g. "2026-11-26"
  demo: false
};

/* One entry per competing affiliate: {id, net, ftd, active, spread}. Totals for the window so far.
   Empty until the first upload on 26 November 2026. */
var DATA = [];

/* Daily top 3, added automatically by admin.html */
var SNAPSHOTS = [];
