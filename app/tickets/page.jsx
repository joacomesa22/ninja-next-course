import { Suspense } from "react";
import Loader from "../loading";
import TicketList from "./TicketList";

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
      </nav>
      <Suspense fallback={<Loader />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
