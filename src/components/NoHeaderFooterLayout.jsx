
import { Outlet } from "react-router-dom";

export default function NoHeaderFooterLayout() {
  return (
    <div className="NoHeaderFooterLayout">
      <main>
        <Outlet /> 
      </main>
    </div>
  );
}