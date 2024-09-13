import Link from "next/link";
import React from "react";

export default function ArchivedNotifications() {
  return (
    <div>
      Archived Notifications
      <Link href={"/dashboard/default"}>Default</Link>
    </div>
  );
}
