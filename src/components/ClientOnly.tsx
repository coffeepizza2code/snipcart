import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

function ClientOnly({ children }: Props) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
    console.log("daniel");
    
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div>{children}</div>;
}

export default ClientOnly;
