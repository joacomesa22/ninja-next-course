import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        aspernatur ipsam animi nemo voluptas fugit eum cum, officia vel modi
        quasi consectetur possimus officiis tempore odio. Doloremque culpa illo
        mollitia!
      </p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>
      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          doloremque et, itaque voluptatibus asperiores eaque repudiandae quae
          deleniti beatae. Sunt obcaecati hic natus deleniti, assumenda quis
          quisquam? Error, nihil sit.
        </p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          doloremque et, itaque voluptatibus asperiores eaque repudiandae quae
          deleniti beatae. Sunt obcaecati hic natus deleniti, assumenda quis
          quisquam? Error, nihil sit.
        </p>
      </div>
    </main>
  );
}
