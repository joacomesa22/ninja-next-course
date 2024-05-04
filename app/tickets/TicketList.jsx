import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}
export default async function TicketList() {
  const data = await getData();
  return (
    <>
      {data.map(({ id, title, body, priority }) => (
        <Link key={id} href={`/tickets/${id}`}>
          <div className="card my-5">
            <h3>{title}</h3>
            <p>{body.slice(0, 200)}...</p>
            <div className={`pill ${priority}`}>{priority} priority</div>
          </div>
        </Link>
      ))}

      {data.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
      )}
    </>
  );
}
