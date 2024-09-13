import Link from "next/link";
import React from "react";

export default function DefaultNotifications() {
  return (
    <div>
      Default Notifications
      <Link href={"/dashboard/archived"}>Archived</Link>
    </div>
  );
}
