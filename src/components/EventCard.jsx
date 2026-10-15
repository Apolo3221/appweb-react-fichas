function EventCard({ title, location, startsAt, available }) {
    return (
        <article className="event-card">
            <h2>{title}</h2>
            <p>{location}</p>
            <p>{startsAt}</p>
            <p>{available} lugares disponíveis</p>
        </article>
    )
}
export default EventCard