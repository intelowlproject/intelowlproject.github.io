"use client";

import { useEffect, useState } from "react";

export default function DocsPage() {
  const [isReloaded, setIsReloaded] = useState(false);
  useEffect(() => {
    if (!isReloaded) {
      setIsReloaded(true);
      window.location.reload();
    }
    console.log("ji");
  }, []);

  return <div>Loading</div>;
}
