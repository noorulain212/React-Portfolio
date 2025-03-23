export default function Hero({ name, bio }) {
    return (
      <section>
        <h1>{name || "Default Name"}</h1>
        <p>{bio || "No bio available"}</p>
      </section>
    );
  }
  